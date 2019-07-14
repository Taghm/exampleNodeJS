const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
//app.use(express.static(__dirname + "/public"));
if (process.env.NODE_ENV === "production"){
  app.use(express.static(__dirname + "/public"));
}
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});
app.listen(process.env.PORT || 3000);
module.exports = {app}
