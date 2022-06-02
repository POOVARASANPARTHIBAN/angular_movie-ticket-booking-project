const Cloudant = require("@cloudant/cloudant");
var url =
  "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/";
var username = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
var password = "58de0ca6ebd4250a97d0a7d300191f68";
var cloudant = Cloudant({ url: url, username: username, password: password });

insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("moviebookingapp").insert(paramsvalue);
};
module.exports = { insert };
