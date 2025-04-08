import express from 'express';
import router from './src/routes/index.js'
const app = express();

app.use(express.json());

app.route('/')
  .get((req, res) => {
    res.send("Hello Worldrld");
  });
app.use('/api', router)

const PORT = process.env.Port || 8000;
app.listen(PORT, (Req,res) => {
  console.log(`Server running at http://localhost:${PORT}`);
});

