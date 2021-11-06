const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.Register= async (req, res) => {
    try {
        const {email, password}= req.body;
        const findUser = await User.findOne({email});
        if(findUser){
            return res.status(400).send({errors:[{msg:"email should be unique"}]});
        }
        const saltRound=10
        const hashedPassword= bcrypt.hashSync(password, saltRound)
        const newUser = new User({...req.body});
        newUser.password = hashedPassword;

        const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
        );
        await newUser.save();
        res.send({msg:"registration successful", user:newUser, token});
    } catch (error) {
       res.send({errors:[{msg:"User's registration failed "}]})}
       
};


exports.login = async (req, res) =>{
    try {
    // email & password
    const { email, password } = req.body;
    //   test si email mawjoud
    const findUser = await User.findOne({ email });
    // ken mech mawjoud
    // bad credential
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "No user with this Email adress or password hase been found " }] });
    }
    // test password
    //   password fel BD== password
    const comparePass = await bcrypt.compare(password, findUser.password);
    //   ken mech kifkif
    // bad crential
    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // CREE UN TOKEN= meftaa7
    const token = jwt.sign(
      {
        _id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: findUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "can not login", error }] });
  }
};

exports.getAllUsers= async (req, res)=>{
    try {
      const usersList=await User.find({role:"user"});
      res.status(200).send({users:usersList, msg:"get al users"});  
    } catch (error) {
      res.status(400).send({msg:"failed", error});    
    }
};