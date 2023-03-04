const functions = require('firebase-functions');

// Increase readability in Cloud Logging
require("firebase-functions/lib/logger/compat");

const expressApp = require('./dist/ssrapp/server/main').app();

exports.ssr_ssrapp = functions
  .region('us-central1')
  .runWith({})
  .https
  .onRequest(expressApp);
