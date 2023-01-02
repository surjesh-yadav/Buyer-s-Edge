import userModel from "../model/userSchema.js";
export const userSignup = async (req, res) => {
  try {
    // console.log(req.body)
    const exist = await userModel.findOne({ userName: res.body.userName });
    if (exist) {
      return res.status(401).json({ message: `UserName Already Exist` });
    }
    const user = req.body;
    console.log(user);
    const newUser = new userModel(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  
 