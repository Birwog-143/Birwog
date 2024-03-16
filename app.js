require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 8080;

const products_routes = require("./routes/products");
const Product = require("./models/product");


//middleware or to set router
app.use("/api/products",products_routes);

const start = async () =>{
    try{ 
        await connectDB(process.env.MONGODB_URL);
        
    app.listen(PORT,()=>{console.log(` Database connected Succecfully, Server is running on ${PORT}`);
     });
} catch(error){
    console.log(error);
}
};

start();