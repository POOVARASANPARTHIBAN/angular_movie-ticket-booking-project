const nano = require("nano");
const url =
  "https://apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p:58de0ca6ebd4250a97d0a7d300191f68@75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/";
const nanodb = nano(url);
const moviedb = nanodb.use("moviebookingapp");

module.exports = { moviedb };
