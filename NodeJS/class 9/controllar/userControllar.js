const bcrypt = require("bcrypt");
const signupModel = require("../model/userMode");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secKey = "asdasdads";
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Folder where images will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // File name with timestamp
  },
});
const upload = multer({ storage: storage });


const sendEmail = async (name, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for other ports
      requireTLS: true,
      auth: {
        user: "saqib1999raheem@gmail.com",
        pass: "sigf zwat fnax objy",
      },
    });
    const mailOptions = {
      from: "",
      to: email,
      subjest: "For Reset Password",
      html: `<p>hi ${name}, copy this link <a href="http://localhost:5000/reset-password?token=${token}">Reset Password</a>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else console.log(info);
    });
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const signupData = (req, resp) => {
  try {
    const { fname, email, password } = req.body;
    const profileImage = req.file;
    console.log(profileImage)

    if (!email) return resp.send("invalid data");
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      console.log(salt);

      const hash = bcrypt.hashSync(password, salt);
      const data = new signupModel({
        fname: fname,
        email: email,
        password: hash,
        profileImage: profileImage.path,
      });
      data.save();

      resp.send({
        status: 200,
        message: "data save sucessfully",
        data: data,
      });
    }
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const loginData = async (req, resp) => {
  try {
    const { email, password } = req.body;
   

    const userdata = await signupModel.findOne({ email: email });
    console.log(userdata);

    if (!userdata)
      return resp.send({
        sucess: false,
        status: 200,
        message: "user not exist",
      });

    const match = bcrypt.compareSync(password, userdata.password);
    console.log( ">>>>>>>>",match);
    if(!match) return resp.send({message:'password and email not match'})

    jwt.sign(
      { name: userdata.fname },
      secKey,
      { expiresIn: "1m" },
      (err, token) => {
        if (err) resp.send({ err: err });

        resp.send({
          sucess: true,
          status: 200,
          message: "login sucess",
          token: token,
        });
      }
    );
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const updateData = async (req, resp) => {
  try {
    const { fname, email } = req.body;
    const data = await signupModel.findByIdAndUpdate(
      { _id: req.params.id },
      { fname, email }
    );
    console.log(data);

    if (!data) return resp.send({ message: "data not found" });
    resp.send({
      status: 200,
      message: "data updated!",
      data: data,
    });
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const deleteData = async (req, resp) => {
  try {
    const data = await signupModel.findByIdAndDelete({ _id: req.params.id });
    if (!data) return resp.send({ message: "data not found" });
    resp.send({
      status: 200,
      message: "data delete!",
    });
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const getData = async (req, resp) => {
  try {
    const data = await signupModel.find();
    if (!data) return resp.send("data not found!");
    resp.send({
      status: 200,
      message: "data get sucessfully",
      data: data,
    });
  } catch (error) {
    resp.send({
      message: "error",
      err: error,
    });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const userData = await signupModel.findOne({ email: req.body.email });

    if (userData) {
      const randomString = randomstring.generate();

      const data = await signupModel.updateOne(
        { email: req.body.email },
        {
          $set: { randomToken: randomString },
        }
      );

      sendEmail(userData.fname, userData.email, randomString);
      res.send({
        message: "check your email",
        status: 200,
      });
    }
  } catch (error) {
    res.send({
      message: "error",
      err: error,
    });
  }
};

const resetPassword = async (req,res) => {
    try {
        const token = req.query.token
        const tokenData = await signupModel.findOne({randomToken:token})
        if(tokenData){
            const password = req.body.password;
            const salt = bcrypt.genSaltSync(saltRounds);
            console.log(salt);
      
            const hash = bcrypt.hashSync(password, salt);
        const tokenData = await signupModel.findOne({randomToken:token})
           const data = await signupModel.findByIdAndUpdate({_id:tokenData._id},{$set:{password:hash,randomToken:''}},{new:true})
        }
        res.send({
            status:200,
            message:"reset password successfully"
        })
        
    } catch (error) {
        res.send({
            message:"error",
            err:error
        })
    }
};

module.exports = {
  signupData,
  updateData,
  deleteData,
  getData,
  loginData,
  forgetPassword,
  resetPassword,
  upload
};
