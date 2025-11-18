const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during signup", success: false, error: error.message });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.status(400).json({message:'All fields are required', success: false})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.status(401).json({message:'Incorrect password or email', success: false }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.status(401).json({message:'Incorrect password or email', success: false }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(200).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during login", success: false, error: error.message });
  }
}

module.exports.Logout = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie('token', { path: '/' });
    return res.status(200).json({ message: 'User logged out', success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Logout failed', success: false });
  }
};