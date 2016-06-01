/// <reference path="../../typings/index.d.ts" />
"use strict";
var express = require("express");
var app = express();
var router = express.Router();
router.get('/pokemon', function (req, res) {
    res.json({ message: 'Hello pokemon!' });
});
app.use("/api/v1", router);
app.use("/", express.static(__dirname + "/../"));
var server = app.listen(8000, function () {
    console.log("Server listening on port 8000");
});
