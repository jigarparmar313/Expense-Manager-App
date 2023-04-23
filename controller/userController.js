const userModel = require("../models/userModel");

// login callaback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
        success:true,
        user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// Register Callback / Controller
const registerController = async (req,res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success:true,
            newUser,
        })
    } catch (error) {
      // https://github.com/techinfo-youtube/Expense-Management-System-MERN-STACK-Project.git
        res.status(400).json({
            success:false,
            error
        })
    }
};

module.exports = { loginController, registerController };
