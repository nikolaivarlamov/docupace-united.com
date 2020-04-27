// Chromedriver will start before running all the tests and stopped in the end:

require('nightwatch/bin/runner.js');

var chromedriver = require('chromedriver');

module.exports = {
    before : function(done) {
        chromedriver.start();
    },

    after : function(done) {
        chromedriver.stop();
        done();
    }
};
