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

app.get("/", async (req, res) => {
  try {
    const query = await pool.query('SELECT * FROM "Posts"');
    res.json({ success: true, msg: query.rows });
  } catch (err) {
    res.json({ success: false, msg: "😁" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
