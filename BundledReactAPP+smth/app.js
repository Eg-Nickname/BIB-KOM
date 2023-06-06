const express = require("express");
const pg = require("pg");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const image_folder = "./build";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, image_folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

const remove_image = (delete_path) => {
  fs.unlink(delete_path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

function generateAccessToken() {
  return jwt.sign({ logged: true }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
}

const authenticateToken = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({ success: false, msg: "Token not provided" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ success: false, msg: "Not valid token" });
    res.status(200).json({ success: true, logged: true });
  });
};

const Pool = pg.Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Bibkom",
  password: "1234",
  port: 5001,
});

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/authentication", authenticateToken);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username == process.env.USER) {
    if (password == process.env.PASSWORD) {
      const token = generateAccessToken();
      return res.status(200).json({ success: true, token: token });
    }
    return res.status(400).json({ success: false, msg: "Niepoprawne hasło" });
  }
  res.status(400).json({ success: false, msg: "Niepoprawny nick" });
});
app.get("/api/posts", async (req, res) => {
  try {
    const query = await pool.query('SELECT * FROM "Posts"');
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.get("/api/posts/page", async (req, res) => {
  const currentPage = req.query.page || 0;
  const postCountPerPage = 3;
  try {
    const query = await pool.query(`
    SELECT * FROM "Posts"
    ORDER BY "Post_id" DESC
    OFFSET (${currentPage} - 1) * ${postCountPerPage}
    LIMIT ${postCountPerPage};`);
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.get("/api/questions", async (req, res) => {
  try {
    const query = await pool.query('SELECT * FROM "Questions"');
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.post("/api/questions", async (req, res) => {
  try {
    let data = req.body;
    const query = await pool.query(
      `INSERT INTO "Questions" ("Email","Name","Topic","text") VALUES ('${data.email}','${data.name}','${data.topic}','${data.text}') RETURNING *`
    );
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await pool.query(
      `SELECT * FROM "Posts" WHERE "Post_id"=${id}`
    );
    if (query.rowCount === 0) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});

app.post("/api/posts", upload.single("image"), async (req, res) => {
  try {
    let data = req.file
      ? { ...req.body, image: req.file.filename }
      : { ...req.body, image: "undefined.png" };
    const query = await pool.query(
      `INSERT INTO "Posts" (title,text,image) VALUES ('${data.title}','${data.text}','${data.image}') RETURNING *`
    );
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await pool.query(
      `DELETE FROM "Posts" WHERE "Post_id"=${id} RETURNING * `
    );
    if (query.rowCount === 0) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }
    if (query.rows[0].image !== "undefined.png") {
      let delete_path = path.join("./build", query.rows[0].image);
      remove_image(delete_path);
    }
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.patch("/api/posts/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    let query = await pool.query(
      `SELECT image FROM "Posts" WHERE "Post_id"=${id}`
    );
    let oldImage = query.rows[0].image;
    let data = req.file
      ? { ...req.body, image: req.file.filename }
      : { ...req.body, image: oldImage };
    query = await pool.query(
      `UPDATE "Posts" SET date ='${data.date}',text='${data.text}',image='${data.image}' ,title='${data.title}' WHERE "Post_id"='${id}'RETURNING *`
    );
    if (query.rowCount === 0) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }
    if (oldImage !== "undefined.png" && oldImage !== data.image) {
      let delete_path = path.join("./build", oldImage);
      remove_image(delete_path);
    }
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});
app.delete("/api/questions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await pool.query(
      `DELETE FROM "Questions" WHERE "Question_id"=${id} RETURNING * `
    );
    if (query.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "Question not found" });
    }
    res.status(200).json({ success: true, data: query.rows });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
