const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {

  try{
    mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
  console.log("MONDO DB CONNECTED...")
  }catch(err){
    console.error(e)
    process.exit(1)
  }


}
module.exports = connectDB;