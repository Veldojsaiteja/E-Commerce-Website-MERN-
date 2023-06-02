import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import colors from "colors";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
//database  config
connectDB();

//important details config
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors()); // helps in running both front end as well as backend.
app.use(express.json()); //before we use body-parser, now in es6 we use express.json()
app.use(morgan("dev")); // morgan is basically use to check the api call hits

app.use("/api/v1/auth", authRoutes); // beginning with '/'  is much important.

app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello , welcome to e-commerce website</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.white);
});
