/// <reference path="../../typings/index.d.ts" />

import * as express from "express";

let app = express();
let router = express.Router();

router.get('/pokemon', function(req, res) {
    res.json({ message: 'Hello pokemon!' });   
});
app.use("/api/v1", router);
app.use("/", express.static(__dirname+"/../"));

const server = app.listen(8000, () => {
    console.log("Server listening on port 8000");
});