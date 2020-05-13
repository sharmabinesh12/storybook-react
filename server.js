var express = require("express");
var app = express();
const PORT = process.env.PORT || 9010;

app.get("/ping", function(req, res) {
  res.status(200).json({ data: "PONG" });
});

app.use(express.static('build'));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/storybook-static/index.html");
});

app.listen(PORT, function() {
  console.log("listening on *:" + PORT);
});
