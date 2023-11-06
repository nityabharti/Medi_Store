import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-cybeavq-shard-00-00.futllgp.mongodb.net:27017,ac-cybeavq-shard-00-01.futllgp.mongodb.net:27017,ac-cybeavq-shard-00-02.futllgp.mongodb.net:27017/?ssl=true&replicaSet=atlas-c291yr-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
