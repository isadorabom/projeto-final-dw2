const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const url =
	// 	"mongodb+srv://isadorabom:isadora123@bd1-9c2v9.mongodb.net/test?retryWrites=true&w=majority";
	"mongodb://localhost:27017/BDcafe";

mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
