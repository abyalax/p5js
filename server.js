import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve file statis (HTML, CSS, JS)
app.use(express.static("public"));

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
