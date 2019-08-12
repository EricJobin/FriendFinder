// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

console.log("apiRoutes.js checking in")
var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

function absDiff(user, notuser) {
    var z=[];
    for(var i = 0; i<user.length; i++){
        z[i] = Math.abs(parseInt(user[i]) - parseInt(notuser[i]))
    }
    //z should now be an array of absolute differences of survey answers

    //sum array to find total difference and return this value
}

function bestMatch(me, them){
    var bestie;
    for (var i=0; i < them.length; i++){
        absDiff(me.userScores, them.userScores)
        




    }

}

module.exports = function(app) {

    app.get("/api/survey", function(req, res) {
        return res.json(friendsArray);
    });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

    app.post("/api/survey", function(req, res) {

        friendsArray.push(req.body);
        // req.body is the survey results from user

        bestMatch(req.body, friendsArray)









        res.json(friendsArray);
        
        // res.json("Let see if I see this");
    
    });
};
