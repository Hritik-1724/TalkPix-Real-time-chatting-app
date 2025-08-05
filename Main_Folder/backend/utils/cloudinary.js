import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
    cloud_name: "dgkyjulmo",
    api_key: "194149173684689",
    api_secret: "3aZyeiI3cLuD0SuvEL5ZkxgMe-I"
});
export default cloudinary;