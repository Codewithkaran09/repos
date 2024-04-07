


const express = require("express");
const app = express();


const port = process.env.PORT || 3000;
const apiData = require("./data.json");

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});

app.get("/Services", (req, res) => {
    res.send(apiData);
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});





