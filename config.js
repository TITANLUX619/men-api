module.exports = {
  port: process.env.PORT || 3000,
<<<<<<< HEAD
  db: process.env.MONGODB || "mongodb://" + MONGODB_SERVICE_SERVICE_HOST + ":27017/mongodb"
=======
  db: process.env.MONGODB || MONGODB_URI
>>>>>>> 3eeb72eca6901eb6c7051956ccd01623ae727c78
};
