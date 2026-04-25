const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/leads", require("./routes/leads"));
app.use("/properties", require("./routes/properties"));
app.use("/deals", require("./routes/deals"));

app.listen(5000, () => console.log("Server running on port 5000"));
