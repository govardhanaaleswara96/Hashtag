const express = require('express');
const app = express();
const tweetRouter = require("./routes/tweet");

app.use(express.json({ extened: true }));

// @route   get 
// @desc    welcome api
// @access  public
app.get('/', async (req, res) => {
    res.json({ msg: "Welcome to Hashtag API..." });
})
// routers 
app.use("/api/tweet", tweetRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})