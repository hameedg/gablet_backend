const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const listingRoutes = require("./routes/listingRoutes");

dotenv.config({ path: "./.env" });

connectDB();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));


app.use("/api/properties", listingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});