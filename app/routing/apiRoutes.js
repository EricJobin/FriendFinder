//apiRoutes for Friend Finder app

var friendsArray = require("../data/friends");

function absDiff(user, notuser) {//Inputing survey results for the current survey and iteration i of past surveys
    var z=[];
    var zsum = 0;
    for(var i = 0; i<user.length; i++){
        z[i] = Math.abs(parseInt(user[i]) - parseInt(notuser[i]))
    }
    for (var i=0; i<z.length; i++){zsum=zsum+z[i]}
    return zsum
}

//This function is the magic that finds you your new best friend
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

    app.post("/api/survey", function(req, res) {

        friendsArray.push(req.body);
        var foundFriend = bestMatch(req.body, friendsArray)
        res.json(friendsArray[foundFriend]);
    
    });
};
