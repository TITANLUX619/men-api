

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(`Error connectin to database: ${err}`);
  } else {
      console.log('Database connection established...');
      app.listen(config.port, () => {
        console.log(`API REST running on http://localhost:${config.port}`);
      });
  }
});
