const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const cors = require("cors");
const dbconnection = require("../server/connection/db");
const storedb = require("./connection/nanodb");
const { response } = require("express");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postuser", (request, response) => {
  console.log(request);
  var object = {
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
    address: request.body.address,
    mobile: request.body.mobile,
    type: "users",
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.post("/addbooking", (request, response) => {
  console.log(request);
  var object = {
    username: request.body.username,
    email: request.body.email,
    mobile: request.body.mobile,
    bookingdate: request.body.bookingdate,
    theatername: request.body.theatername,
    moviename: request.body.moviename,
    moviewatchers: request.body.moviewatchers,
    totalseats: request.body.totalseats,
    seatnames: request.body.seatnames,
    totalcost: request.body.totalcost,
    type: "bookings",
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.post("/addmovie", (request, response) => {
  console.log(request);
  var object = {
    moviename: request.body.moviename,
    movieimageurl: request.body.movieimageurl,
    movievideourl: request.body.movievideourl,
    moviedescription: request.body.moviedescription,
    theatername: request.body.theatername,
    ticketcost: request.body.ticketcost,
    actorname: request.body.actorname,
    directorname: request.body.directorname,
    releasedate: request.body.startdate,
    outdate: request.body.enddate,
    type: "movies",
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.get("/checkuser/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  var object = {
    selector: {
      email: req.params.id,
      type: "users",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("EmailId doesn't exist");
    }
  });
});

app.get("/chooselocation/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  var object = {
    selector: {
      theaterlocation: req.params.id,
      type: "theater",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Theater doesn't exist");
    }
  });
});

app.get("/choosemovie/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  var object = {
    selector: {
      theatername: req.params.id,
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Theater doesn't exist");
    }
  });
});

app.get("/getmoviedetails/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  var object = {
    selector: {
      moviename: req.params.id,
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Movie doesn't exist");
    }
  });
});

app.get("/getfeedback", (req, res) => {
  var object = {
    selector: {
      type: "feedbacks",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Feedbacks doesn't exist");
    }
  });
});

app.get("/getallmovie", (req, res) => {
  var object = {
    selector: {
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      //console.log(data);
      return res.json(data);
    } else {
      console.log("Feedbacks doesn't exist");
    }
  });
});

app.get("/getallbooking", (req, res) => {
  var object = {
    selector: {
      type: "bookings",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Feedbacks doesn't exist");
    }
  });
});

app.get("/getmybooking/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  var object = {
    selector: {
      email: req.params.id,
      type: "bookings",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("Feedbacks doesn't exist");
    }
  });
});

app.get("/getdata/:theatername/:moviename/:bookingdate", (req, res) => {
  console.log("retreived......", req.params.theatername);
  console.log(req.params.moviename);
  console.log(req.params.bookingdate);
  var object = {
    selector: {
      theatername: req.params.theatername,
      moviename: req.params.moviename,
      bookingdate: req.params.bookingdate,
      type: "bookings",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("data doesn't exist");
    }
  });
});

app.delete("/deletemovie/:id/:_rev", (req, res) => {
  console.log(req.params.id);
  console.log(req.params._rev);
  var id = req.params.id;
  var rev = req.params._rev;

  storedb.moviedb.destroy(id, rev, "movies").then((data) => {
    if (data) {
      console.log(data);
      return res.json(data);
    } else {
      console.log("movie doesn't exist");
    }
  });
});

app.post("/addtheater", (request, response) => {
  console.log(request);
  var object = {
    theatername: request.body.theatername,
    theaterid: request.body.theaterid,
    totalseats: request.body.totalseats,
    theaterlocation: request.body.theaterlocation,
    type: "theaters",
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.post("/addfeedback", (request, response) => {
  console.log(request);
  var object = {
    username: request.body.username,
    email: request.body.email,
    message: request.body.message,
    type: "feedbacks",
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
