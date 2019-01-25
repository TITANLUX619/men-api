module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || "mongodb://" + process.env.MONGODB_SERVICE_SERVICE_HOST + ":27017/objects"
};