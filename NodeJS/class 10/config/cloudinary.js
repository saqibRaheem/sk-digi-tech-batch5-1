const cloudinary = require("cloudinary").v2;
const fs = require('fs')

cloudinary.config({
  cloud_name: "doitog51v",
  api_key: "581857273393227",
  api_secret: "wV2o8F7RHclj3jJLjrUWx1cpd04",
//   wV2o8F7RHclj3jJLjrUWx1cpd04
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log("path >>" , localFilePath)
    // if (!localFilePath) return null;
    //upload the file on cloudinary
   const response = await cloudinary.uploader.upload({ localFilePath});
    // file has been uploaded

    console.log("file upload >" , response);
    fs.unlinkSync(localFilePath);
    return response
  } catch (error) {
   fs.unlinkSync(localFilePath)
   return null
  }
};
module.exports = uploadOnCloudinary