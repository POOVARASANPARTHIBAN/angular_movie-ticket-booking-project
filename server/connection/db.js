const Cloudant = require("@cloudant/cloudant");
let app = express();
app.disable("x-powered-by");
let helmet = require("helmet");
app.use(helmet.hidePoweredBy());
let url =
  "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/";
let username = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
let password = "58de0ca6ebd4250a97d0a7d300191f68";
let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("moviebookingapp").insert(paramsvalue);
};
module.exports = { insert };
