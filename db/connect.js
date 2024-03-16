const mongoose = require("mongoose");



const connectDB = (uri) => {
    console.log("Database trying to connect without errors");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// // Replace these with your actual credentials
// const username = "Pavan";
// const password = "9553954167";
// const clusterName = "cluster0";

// // Construct the MongoDB URI
// const uri = `mongodb+srv://${username}:${password}@${clusterName}.x8tupd4.mongodb.net/${clusterName}?retryWrites=true&w=majority&appName=Cluster0`;

// const connectDB = () => {
//     console.log("connect db");
//     return mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };

module.exports = connectDB;
