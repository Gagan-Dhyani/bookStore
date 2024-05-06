import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

import bookroute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"

const PORT=process.env.PORT || 3001
const URI=process.env.mongoDBURI


try {
    mongoose.connect(URI)
    console.log("Connected");
} catch (error) {
    console.log("Error:",error);
    
}
//defining routes

app.use("/book",bookroute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})