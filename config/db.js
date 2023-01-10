const { default: mongoose } = require("mongoose");
require("../models/adModel");
require("../models/authModel");

const connection = async () => {
  try {
    // const connection = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    // })

    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/finalproject",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (!err) {
          console.log("Connected to db");
        } else {
          console.log("Error with connection");
        }
      }
    );

    if (connection) {
      console.log("db connected");
    }
  } catch (e) {
    // console.log("backend issue");
    console.log(e);
  }
};

module.exports = connection;
