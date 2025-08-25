import express from "express";
import { ENV } from "./config/env.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello worls");
});


app.listen(ENV.PORT, ()=>{
    console.log("Server started on port:", ENV.PORT);
    connectDB();
});
