import * as sixToFive from "6to5/register";
import * as Express from "express";
import * as fs from "fs";
import * as jade from "jade";
import * as path from "path";
import * as React from "react";

export let app = new Express();

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//app.use(Express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
	res.send('hello world')
});

app.listen(1919);

