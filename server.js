import express from "express";
import pg from "pg";
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

app.get("/api/posts", async (req, res) => {
  try {
    const query = await pool.query('SELECT * FROM "Posts"');
    res.json({ success: true, data: query.rows });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await pool.query(
      `SELECT * FROM "Posts" WHERE "Post_id"=${id}`
    );
    if (query.rowCount === 0) {
      return res.json({ success: false, msg: "Post not found" });
    }
    res.json({ success: true, data: query.rows });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

app.post("/api/posts", async (req, res) => {
  const { title, date, text, image } = req.body;
  try {
    const query = await pool.query(
      `INSERT INTO "Posts" (title,date,text,image) VALUES ('${title}','${date}','${text}','${image}') RETURNING *`
    );
    res.json({ success: true, data: query.rows });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await pool.query(
      `DELETE FROM "Posts" WHERE "Post_id"=${id} RETURNING * `
    );
    if (query.rowCount === 0) {
      return res.json({ success: false, msg: "Post not found" });
    }
    res.json({ success: true, data: query.rows });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
