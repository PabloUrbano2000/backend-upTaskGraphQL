const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  console.log(process.env.DB_MONGO);
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
      //   useCreateIndex: true,
    });
    console.log("DB CONECTADA");
  } catch (error) {
    console.log(`Hubo un error: ${error}`);
    process.exit(1); // detener la app
  }
};

module.exports = conectarDB;
