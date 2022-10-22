const app = require("express")();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200);
  res.send("Express is working!");
});
app.listen(port, () => console.log(`Express is running on port ${port}`));
