// Connect To Mongo Db
const mongoose = require('mongoose')
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongo');
    } catch (error) {
        throw new Error("can't connect to mongo check your connection")
    }
}
module.exports = connect