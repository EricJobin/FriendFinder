// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

console.log("apiRoutes.js checking in")
var friendsArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

//troubleshooting variables
// var t0,t1,t2,t3,t4,t5;

function absDiff(user, notuser) {
    var z=[];
    var zsum = 0;
    for(var i = 0; i<user.length; i++){
        z[i] = Math.abs(parseInt(user[i]) - parseInt(notuser[i]))
    }
    for (var i=0; i<z.length; i++){zsum=zsum+z[i]}
    return zsum
}

function bestMatch(me, them){ //passing in me = survey results , them = friendsArray
    var bestie=-1;
    var bestieScore=100;
    for (var i=0; i < them.length; i++){
        var thisguy = absDiff(me.userScores, them[i].userScores);
        if (thisguy < bestieScore && me.userName != them[i].userName){bestie=i; bestieScore = thisguy}
    }
    return bestie;
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

        var foundFriend = bestMatch(req.body, friendsArray)


        res.json(friendsArray[foundFriend]);


        // t0= '1: req.body.userScores; 2: friendsArray[0].userScores, 3: req.body.userName; 4: friendsArray[0].userName; 5: foundFriend'
        // t1= req.body.userScores;
        // t2= friendsArray[0].userScores;
        // t3= req.body.userName;
        // t4= friendsArray[0].userName;
        // t5= foundFriend;

        

        // var answer=[t0,t1, t2, t3, t4, t5 ]

        // res.json(answer);
        
    
    });
};
