const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", function(req, res){
    console.log(req)
    res.send("welcome to our site");
})

app.get("/contact", function (req, res) {
    res.send("<h1>Contact Us Page</h1>")
})

app.listen(8000, function(){
    console.log(`Server has started on port ${PORT}`);
});

// the .gitignore is used to remove folders ignored for hosting
// git add. sends files to the area in github
// git commit -m commit messages to save file
// git push origin