const app = require('../backend_db/src/app');
const connectDB = require('../backend_db/src/db/db');

connectDB()
app.listen(3000, ()=>{
    console.log("Server is running on port");
})
