const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	    res.send('Hello, Azure App Service CI/CD Pipeline!');
});

app.listen(port, () => {
	    console.log(`Server running on http://localhost:${port}`);
});

File: package.json

{
	    "name": "azure-app",
		    "version": "1.0.0",
		    "main": "app.js",
		    "scripts": {
			            "start": "node app.js"
			        },
		    "dependencies": {
			            "express": "^4.18.2"
			        }
}
