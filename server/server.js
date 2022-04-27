const express = require('express')

const app = express()

app.get("/api", (req, res) => {
	res.json({
		"users": ["userOne", "userTwo", "userThree"],
		"recipes": [
			{
				id: 1,
				slug: "tzatziki",
				title: "TZATZIKI - originální řecký recept",
				prepTime: "20 min",
				category: "předkrmy"
			}, {
				id: 2,
				slug: "recept",
				title: "Gulášek",
				prepTime: "15 min",
				category: "hlavní chod"
			}
		]
	})
})



app.listen(5000, () => {console.log('Server started at port 5000.')})