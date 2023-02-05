import mongoose from "mongoose";

const connnectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("connection established with mongoDB"))
    .catch((err) => console.log(err));
};

export default connnectDB;
