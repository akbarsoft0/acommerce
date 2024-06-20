const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModal = require("./models/userModal");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

app.get("/", (req, res) => {
  res.send("hello from the server side");
});

app.post("/users", async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(name, password);
    const validData = await UserModal.find({
      $and: [
        { password: password },
        { $or: [{ name: name }, { email: name }] },
      ],
    });

    console.log(validData);
    if (validData.length === 0) {
      const userData = await UserModal.create(req.body);
      res.json(userData);
    } else {
      res.json({ msg: "user already existed" });
    }
  } catch (error) {
    res.send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(name, password);
    const validData = await UserModal.find({
      $and: [
        { password: password },
        { $or: [{ name: name }, { email: name }] },
      ],
    });

    console.log(validData);
    if (validData.length === 0) {
      res.json({ msg: "user not found" });
    } else {
      res.json(validData);
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(3001, console.log("server running"));

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT || 8800;
// require("dotenv").config();
// const mongoose = require("mongoose");
// const route = require("./routes/routes");
// const cookieParser = require("cookie-parser");

// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// mongoose
//   .connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => {
//     console.log("MongoDB is Connected..");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// app.use("/", route);

// app.listen(PORT, () => {
//   console.log("Server is running on " + PORT);
// });
