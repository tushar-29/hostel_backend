const {Student} = require("../DbSchema");


async function addStudent(req, res) {
    const data = {
        complains: [],
        password: req.body.regNo,
        ...req.body
    };
    console.log("backend data = ", data);

    const test = await Student.create(data).catch(err => {
        console.log("backend student/add error");
        console.log(err);
        res.json({err})
    });

    console.log(test);
    res.json({test});
}

module.exports = { addStudent };