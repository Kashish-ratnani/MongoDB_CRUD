const { MongoClient } = require('mongodb');

const url = "mongodb+srv://kashish:kashu123@cluster0.vohfjx0.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Employee");
    const collection = db.collection("employee_info");
    const query = { name: "Kashish" }; // Query to find the document to update
    const updateValues = { $set: { year: "6", salary: 600000 } }; // Update values
    return collection.updateOne(query, updateValues)
      .then(result => {
        console.log("1 document updated");
        client.close();
      })
      .catch(error => {
        console.error("Update operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
