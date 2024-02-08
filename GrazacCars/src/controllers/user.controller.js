const { User } = require("../models/userModels");

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password,
      gender,
    } = req.body;
    if (!userName && !email && !phoneNumber && !password) {
      return res
        .status(400)
        .json({ message: "Please input your username and email" });
    }

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password,
      phoneNumber,
      gender,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User saved successfully", data: newUser });
  } catch (error) {
    return res.status(500).json({ message:'Error Saving User', error: error });
  }
};

exports.login = async (req, res) => {
    try {
        const {userName, password} = req.body;
        if (!userName && !password) {
            return res.status(400).json({ message: "Please enter a username and password"});
        }

        const user = await User.find({userName: userName});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        if (user[0].password !== password) {
            return res.status(400).json({message: "Invalid password"});
        }

        return res.status(200).json({message: "User logged in Successfully", data: user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message:'Error Logging In User', error: error });

    }
}
