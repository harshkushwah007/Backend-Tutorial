const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend:PyqVWi9u9uERvoFR@backend-tutorial.te5ljro.mongodb.net/hailey")
    console.log("Connected to DB");
    
}

module.exports = connectDB