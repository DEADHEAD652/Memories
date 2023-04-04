import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/posts',postRoutes)


const connectionUrl = process.env.DB_Url
  
const port = process.env.PORT || 5000;

mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    })
  )
  .catch((err) => console.log(err.message));
