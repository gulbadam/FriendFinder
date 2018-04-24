const friends = require('../data/friends');
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });
    app.post('/api/friends', (req, res) => {
        let userData = req.body;
        let userScores = userData.scores;

        let bestMatch = { name: '', photo: '', friendDifference: Infinity };
        let totalDif;
        for (let i = 0; i < friends.length; i++) {
            let curFriend = friends[i];
            totalDif = 0;
            console.log(curFriend.name);
            for (let j = 0; j < curFriend.scores.length; j++) {
                let curFriendScore = curFriend.scores[j];
                let curUserScore = userScores[j];
                totalDif += Math.abs(parseInt(curUserScore) - parseInt(curFriendScore));
            }
            if (totalDif <= bestMatch.friendDifference) {
                bestMatch.name = curFriend.name;
                bestMatch.photo = curFriend.photo;
                bestMatch.friendDifference = totalDif;
            }
        }
        friends.push(userData);
        res.json(bestMatch);


    });
}