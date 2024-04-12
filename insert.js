const { MongoClient } = require('mongodb');

const url = "mongodb+srv://kashish:kashu123@cluster0.vohfjx0.mongodb.net/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("Employee");
    const collection = db.collection("employee_info");
    const myobj = { name: "Kashish", department: "Backend Dev", year: "3", salary: 500000 };
    return collection.insertOne(myobj)
      .then(result => {
        console.log("1 document inserted");
        client.close();
      })
      .catch(error => {
        console.error("Insert operation failed:", error);
        client.close();
      });
  })
  .catch(error => {
    console.error("Connection to MongoDB failed:", error);
  });
