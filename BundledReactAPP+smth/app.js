const http = require("http");
const path = require("path");
const express = require("express");

const app = express();
const port = 8080;

// Ustawienie katalogu "build" jako katalogu statycznego
app.use(express.static(path.join(__dirname, "build")));

// Obsługa routingu do pliku "index.html" dla wszystkich tras
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Tworzenie serwera HTTP i nasłuchiwanie na określonym porcie
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem: http://localhost:${port}`);
});
