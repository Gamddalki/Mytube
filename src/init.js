import "./db";
import "./models/Video";
import app from "./server";

const PORT = 7104;

const handlelistening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😆`);

app.listen(PORT, handlelistening);
