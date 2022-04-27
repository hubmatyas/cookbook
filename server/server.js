const express = require('express')

const app = express()

app.get("/api", (req, res) => {
	res.json({
			"users": ["userOne", "userTwo", "userThree"]
		})
})


app.listen(5000, () => {console.log('Server started at port 5000.')})