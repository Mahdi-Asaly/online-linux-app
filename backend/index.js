

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data.js");
const paymentRoutes = require("./routes/payments.js");
const recordRoutes = require("./routes/records.js");

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/api/products',dataRoutes);
app.use('/api/payments',paymentRoutes);
app.use('/api/records',recordRoutes);
app.use('/api/topPayments',paymentRoutes);



app.get('/', (req,res)=>{
    res.send("Welcome to My Online Shop API");
})

const CONNECTION_URL = "mongodb+srv://myprojects:Bb123123@cluster0.wwybj.mongodb.net/productsDB?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=> console.log(`server running on port  ${PORT}`)))
.catch((ERROR)=> console.log(ERROR.message));
mongoose.set('useFindAndModify', false);
