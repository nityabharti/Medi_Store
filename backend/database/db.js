const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB Atlas connection string
const uri = "your_mongodb_atlas_connection_string";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();

    console.log("Connected to MongoDB Atlas");

    // You can now use `client` to interact with the database

    // Example: list all databases
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:", databasesList.databases);
  } finally {
    // Ensure that the client is closed when finished
    await client.close();
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();
