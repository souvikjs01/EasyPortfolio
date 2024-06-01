import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Mongodb connected successfully");
        })
    } catch (error) {
        console.log("Something got wrong", error)
    }
}