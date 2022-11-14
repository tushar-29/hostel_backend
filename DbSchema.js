const mongoose = require("mongoose");


const ComplainSchema = new mongoose.Schema({
  title: String,
  description: String,
  department: String,
  date: {
      day: String,
      month: String,
      year: String,
    },
});

const StudentSchema = new mongoose.Schema({
  name: String,
  regNo: String,
  phoneNo: String,
  hostelNo: String,
  roomNo: String,
  wing: String,
  pName: String,
  pNumber: String,
  password: String,
  complains: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Complain"
  }],
});

const UserSchema = new mongoose.Schema({
  loginId: String,
  password: String,
});


const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Student = mongoose.models.Student ||  mongoose.model("Student", StudentSchema);
const Complain = mongoose.models.Complain ||  mongoose.model("Complain", ComplainSchema);

module.exports = { User, Student, Complain };
