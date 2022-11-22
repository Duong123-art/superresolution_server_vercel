const superResolution_controller = require('./controller/supperResolution_controller.js');

module.exports = function (app) {
  // Domain of ai server
  app
    .route('/getLastestDomain')
    .get(superResolution_controller.getLastedDomain);

  app
    .route('/updateLastedDomain')
    .post(superResolution_controller.updateLatestDomain);
};
