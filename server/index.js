require("dotenv").config()
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'GET'],
    credentials: true
}));


app.listen(3000, () => {
    console.log("Server Started at port 3000")
})