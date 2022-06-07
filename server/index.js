const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const cors = require("cors");
const dbconnection = require("../server/connection/db");
const storedb = require("./connection/nanodb");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postuser", (request, response) => {
  console.log(request);
  let object = {
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
    address: request.body.address,
    mobile: request.body.mobile,
    type: "users",
  };

  dbconnection
    .insert(object)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.send(err);
    });
});

app.post("/addlocation", (request, response) => {
  try {
    console.log(request);
    let object = {
      locationName: request.body.locationName,
      type: "locations",
    };

    if (object.locationName == "") {
      res.send("hiiii");
    }

    dbconnection
      .insert(object)
      .then((data) => {
        response.send(data);
      })
      .catch((err) => {
        response.send(err.message);
      });
  } catch (err) {
    response.send(err);
  }
});

app.post("/addbooking/", (request, response) => {
  console.log(request);
  let object = {
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
    user: request.body.users,
    lastmodifieddate: new Date(),
  };

  dbconnection
    .insert(object)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.send(err);
    });
});

app.post("/addmovie", (request, response) => {
  console.log(request);
  let object = {
    moviename: request.body.moviename,
    movieimageurl: request.body.movieimageurl,
    movievideourl: request.body.movievideourl,
    moviedescription: request.body.moviedescription,
    theaterId: request.body.theaterId,
    ticketcost: request.body.ticketcost,
    actorname: request.body.actorname,
    directorname: request.body.directorname,
    releasedate: request.body.startdate,
    outdate: request.body.enddate,
    type: "movies",
  };

  dbconnection
    .insert(object)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.send(err);
    });
});

app.get("/checkuser/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  let object = {
    selector: {
      email: req.params.id,
      type: "users",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("EmailId doesn't exist");
      res.send("null");
    }
  });
});

app.get("/chooselocation/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  let object = {
    selector: {
      theaterlocationId: req.params.id,
      type: "theaters",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("Theater doesn't exist");
    }
  });
});

app.get("/choosemovie/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  let object = {
    selector: {
      theaterId: req.params.id,
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data1) => {
    if (data1) {
      console.log(data1);
      res.json(data1);
    } else {
      console.log("movie doesn't exist");
    }
  });
});

app.get("/getmoviedetails/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  let object = {
    selector: {
      moviename: req.params.id,
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("Movie doesn't exist");
    }
  });
});

app.get("/getfeedback", (_request, res) => {
  let object = {
    selector: {
      type: "feedbacks",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("Feedbacks doesn't exist");
    }
  });
});

app.get("/getallmovie", (_req, res) => {
  let object = {
    selector: {
      type: "movies",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      res.json(data);
    } else {
      console.log("Movies doesn't exist");
    }
  });
});

app.get("/getalllocation", (_req, res) => {
  let object = {
    selector: {
      type: "locations",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      res.json(data);
    } else {
      console.log("Locations doesn't exist");
    }
  });
});

app.get("/getalltheater", (_req, res) => {
  let object = {
    selector: {
      type: "theaters",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      res.json(data);
    } else {
      console.log("Theater doesn't exist");
    }
  });
});

app.get("/getallbooking", (_req, res) => {
  let object = {
    selector: {
      type: "bookings",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("Allbookings doesn't exist");
    }
  });
});

app.get("/getmybooking/:id", (req, res) => {
  console.log("retreived......", req.params.id);
  let object = {
    selector: {
      email: req.params.id,
      type: "bookings",
    },
  };

  storedb.moviedb.find(object).then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("Mybookings doesn't exist");
    }
  });
});

app.get("/getdata/:theatername/:moviename/:bookingdate", (req, res) => {
  console.log("retreived......", req.params.theatername);
  console.log(req.params.moviename);
  console.log(req.params.bookingdate);
  let object = {
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
      res.json(data);
    } else {
      console.log("data doesn't exist");
    }
  });
});

app.delete("/deletemovie/:id/:_rev", (req, res) => {
  console.log(req.params.id);
  console.log(req.params._rev);
  let id = req.params.id;
  let rev = req.params._rev;

  storedb.moviedb.destroy(id, rev, "movies").then((data) => {
    if (data) {
      console.log(data);
      res.json(data);
    } else {
      console.log("movie doesn't exist");
    }
  });
});

app.post("/addtheater", (request, response) => {
  console.log(request);
  let object = {
    theatername: request.body.theatername,
    totalseats: request.body.totalseats,
    theaterlocationId: request.body.theaterlocationId,
    type: "theaters",
  };

  dbconnection
    .insert(object)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.send(err);
    });
});

app.post("/addfeedback", (request, response) => {
  console.log(request);
  let object = {
    username: request.body.username,
    email: request.body.email,
    message: request.body.message,
    type: "feedbacks",
  };
  dbconnection
    .insert(object)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.send(err);
    });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
