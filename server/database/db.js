import mongoose from "mongoose";
 
mongoose.set("strictQuery", true);

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Congraulation Brother, Your database is connected");
  } catch (error) {
    console.log("Error in database connection", error.message);
  }
};

export default dbConnection;
