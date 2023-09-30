const mongoose = require("mongoose")
require("dotenv").config()

try {
    mongoose.connect(
        process.env.localdb,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        console.log("|----|----|-- Database Connected! --|----|----|")

    )
} catch (error) {
    console.log("Database Not Connected. Error: " + err)
}


