const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-north-1',
  accessKeyId: 'AKIAWI3C5W3Y376DTJMN',
  secretAccessKey: '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'
});

module.exports = AWS;
