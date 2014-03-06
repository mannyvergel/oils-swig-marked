var markedSwig = require('swig-marked');
module.exports = function(pkg, app) {
  var self = this;

  app.on('initializeServer', function() {
    console.log('Initializing swig marked');
    
    var swig = app.swig;

    console.log('!'+swig);
    markedSwig.useFilter(swig);
    markedSwig.useTag(swig);
  })

}

