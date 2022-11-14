const {Complain, Student} = require("../DbSchema");

async function addComplain(req, res) {
    const data = {...req.body};
    console.log(req.body);
    console.log("backend data = ", data);

    const compalinResult = await Complain.create(data).catch(err => {
        console.log("Complain Creating error in backend");
        console.log(err);
        res.json({err})
    })

    // sending response at .../api/:complainId
    // res.json({compalinResult});
    console.log(compalinResult)
    // req.params.articleTitle
    console.log("params = ", req.params.userId);
    console.log("complain result = ", compalinResult);

    const UpdateResult = await Student.findOneAndUpdate(
        {_id: req.params.userId},
        { $push: { complains: [compalinResult._id] } },
        {new: true}).catch(err => {
            console.log("Complain Creating error in joining");
            console.log(err);
            res.json({err})
    });

    res.json(compalinResult)

}

module.exports = { addComplain };
