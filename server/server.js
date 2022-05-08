const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/recipe-routes");
const cors = require('cors');

const app = express();

//middlewares

app.use(express.json());
app.use(cors());
app.use("/recipes", router);


mongoose
	.connect("mongodb+srv://bcaa_admin:z~xx2Z(M8+$m7>s,@cluster0.tz4ul.mongodb.net/CookBook?retryWrites=true&w=majority")
	.then(() => console.log("Database has been connected."))
	.then(() => {
		app.listen(5000);
	})
	.catch((err) => console.log(err));