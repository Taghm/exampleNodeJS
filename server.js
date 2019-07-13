const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 3000);
module.exports = {app}
