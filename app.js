import * as sixToFive from "6to5/register";
import * as Express from "express";
import * as fs from "fs";
import * as jade from "jade";
import * as path from "path";
import * as React from "react";
import {default as list} from "./components/list.jsx";

export let app = new Express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(Express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
let locals = {
    props: {
      state: {text: "hello world", items: ['item1', 'item2']}
    }
  };
  locals.content = React.renderToString(React.createFactory(list)(locals.props));
  res.render('layout', locals);
});

app.get('/api/:file', (req, res) => {
	let path = __dirname + '/api/' + req.params.file + '.json';
	fs.readFile(path, 'utf8', (error, data) => {
		try {
			res.json(JSON.parse(data));
        } catch (e) {
            res.send(404);
        }
	});
});



app.listen(1919);

