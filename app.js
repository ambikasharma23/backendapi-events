const express = require("express");
const app = express();

const db = require("./models");

// Remove db.Sequelize.sync() and move it outside the promise chain
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running");
    });
}).catch(error => {
    console.error("Error syncing database:", error);
});
