const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(cors(
  {
    origin:["http://deploy-mern-lwhq.vercel.app"],
    methods:["Post","Get"],
    credentials:true
  }
))
/* ROUTES */
app.use("/auth",authRoutes)
app.use("/properties",listingRoutes)
app.use("/bookings",bookingRoutes)
app.use("/users",userRoutes)

/* MONGOOSE SETUP */
const PORT = 5001;
mongoose.connect(`mongodb+srv://mahaima_123:mahaima123@cluster0.hs6gooz.mongodb.net/your_database_name?retryWrites=true&w=majority`, {
  dbName: "Mahaima_Estates",
  useNewUrlParser: true,
  useUnifiedTopology: true,  
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
