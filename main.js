import express from 'express';
const app = express();

app.use(express.json());

app.route('/')
  .get((req, res) => {
    res.send("Hello, World!dgddfbbjfdrhdhdhdrey54y5u54h");
  });

const PORT = process.env.Port || 8000;
app.listen(PORT, (Req,res) => {
  console.log(`Server running at http://localhost:${PORT}`);
});

