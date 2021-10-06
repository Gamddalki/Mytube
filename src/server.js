import express from "express";

const PORT = 6104;

const app = express();

const handlelistening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😆`);

app.listen(PORT, handlelistening);
