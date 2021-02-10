var app = require("express")();

app.get("/",(req,res) => {
    res.send("Hello Travis! \n");
});

app.listen(3000, () => {
    console.log("localhost:3000");
});