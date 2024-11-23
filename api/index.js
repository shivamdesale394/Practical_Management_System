import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/practicalRoutes.js";

const app=express();
const PORT=4000 || process.env.PORT;

app.use(express.json());

dotenv.config();

dbConnect();

//mounting api routes
app.use("/api/v1",router)

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});
