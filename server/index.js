const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth",authRoutes)

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
