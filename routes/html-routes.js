// require path module for file serving
const path = require('path');

// export routes
module.exports = function (app) {
  
  // home page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // exercise page
  // need to hook up api so it doesn't hang
  app.get('/exercise', (req, res) => {
    console.log('Exercise path hit');
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // stats page
  // need to hookup api so it doesnt hang
  app.get('/stats', (req, res) => {
    console.log('Stats path hit');
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
}