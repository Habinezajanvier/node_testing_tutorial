const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;

// Create mongodb connection
(async () => {
  await mongoose.connect(
    "mongodb+srv://janvier:testing123@cluster0.pnymtzl.mongodb.net/?retryWrites=true&w=majority",
    () => console.log("Connected to mongodb")
  );
})();

app.listen(port, () => console.log(`Server started on port ${port}`));
