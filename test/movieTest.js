var should = require("chai").should(),
//expect = require("chai").expect,
//assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/movieurl");

//............................Testing movieAll................................
describe("Testing the movieAll", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/movieAll")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        console.log(myObj);
        var msg = "DATABASE CONTAINS MOVIES";
        console.log(msg);
        done();
      });
  });
});


//............................Testing singleMovie................................
describe("Testing the singleMovie", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/singleMovie/577a0c6a5e8d64a10cd33280")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        //console.log(myObj);
        var status = res.text;
        if(status === "null")
        {
          var msg = "movie not exist";
          console.log(msg);
        }
        else {
          var msg1 = "movie exist";
          console.log(msg1);
        }
        done();
      });
  });
});


//............................Testing deleteMovie................................
describe("Testing the deleteMovie", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .delete("/deleteMovie/127864348703545")
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw err;
         }
        var status = res.text;
        if(status === "Movie id not exist")
        {
          console.log(status);
        }
        else {
          var msg1 = "movie exist";
          console.log(msg1);
        }
        done();
      });
  });
});


//............................Testing updateMovie................................
describe("Testing the updateMovie", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .put("/updateMovie/577a0ee6792851b50c0f9b07")
      .expect(200)
      .end(function(err, res) {
        if(err) {
          throw err;
         }
        var status = res.text;
        if(status === "Movie id not exist, not possible to update")
        {
          console.log(status);
        }
        else {
          var msg1 = "movie exist";
          console.log(msg1);
        }
        done();
      });
  });
});


//............................Testing movieAdd................................
describe("Testing the movieAdd", function(err) {
  it("Should handle and send the json data", function(done) {
    url
    .get("/movieAdd")
    .expect(404)
    .end(function(err, res) {
      if(err) {
        throw err;
       }
      var status = res.text;
      if(status = 404)
      {
        var msg = "Data not added";
        console.log(msg);
      }
      else {
        var msg1 = "data added succesfully";
        console.log(msg1);
      }
     done();
     });
  });
});
