const express = require("express");

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
});

//Routes
app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
    res.sendFile("./contact-me.html", { root: __dirname });
});

app.get("/{*splat}",(req, res) => {
    res.sendFile("./404.html", { root: __dirname });
});
