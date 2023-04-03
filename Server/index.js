import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'

const app = express();

app.post('/posts',postRoutes)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const connectionUrl =
  "mongodb+srv://hamza:pAKISTAN123@memories-app.o9c5h6x.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    })
  )
  .catch((err) => console.log(err.message));
