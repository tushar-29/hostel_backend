const {Complain, Student} = require("../DbSchema");

async function checkUserDetails(req, res) {
    const { userId, password } = req.body;

    // do validation stuff


    const user = await Student.findOne({regNo: userId}).catch(err => {
        console.log("Search user id error");
        console.log(err);
    })

    if(! user) {
        res.json({"error": "user does not exist", "response": false, ...user});
        return;
    }
    console.log("searched user data: ", user);
    res.json({"response": true, ...user});

}

module.exports = { checkUserDetails };
