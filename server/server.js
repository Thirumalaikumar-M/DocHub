import express from "express";

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Basic Server setup");
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
