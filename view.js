const { MongoClient } = require('mongodb');

const url = "mongodb+srv://kashish:kashu123@cluster0.vohfjx0.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Employee");
    const collection = db.collection("employee_info");
    return collection.find({}).toArray()
      .then(docs => {
        console.log("Documents retrieved:");
        console.log(docs);
        client.close();
      })
      .catch(error => {
        console.error("View operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
