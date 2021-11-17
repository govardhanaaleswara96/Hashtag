const express = require("express");
const router = express.Router();
const Twit = require('twit');
const config = require("config");

// load twitter keys
const T = new Twit({
    consumer_key: config.get("CONSUMER_KEY"),
    consumer_secret: config.get("CONSUMER_SECRET"),
    access_token: config.get("ACCESS_TOKEN"),
    access_token_secret: config.get("ACCESS_TOKEN_SECRET"),
});
// @route   get 
// @desc    welcome /api/tweet
// @access  public
router.get('/', async (req, res) => {
    const searchText = req.query.searchText;
    try {
        let tweetArray = [];
        let tweetData = await T.get('search/tweets', { q: `${searchText}`, count: 25 });
        if (tweetData) {
            let data = tweetData.data.statuses;
            data.map((item) => {
                let tweetBody = {};
                tweetBody = {
                    "created_at": item.created_at,
                    "location": item.user.location,
                    'text': item.text,
                    'userScreenName': item.user.screen_name,
                    'userImage': item.user.profile_image_url_https,
                    'userDescription': item.user.description,
                }
                tweetArray.push(tweetBody);
            })
        }
        res.status(200).json({ tweets: tweetArray });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ msg: "Server Error" });

    }
});
// @route   get 
// @desc    welcome /api/tweet/count
// @access  public
router.get('/count', async (req, res) => {
    const searchText = req.query.searchText;
    let count = 0;
    let dateTime = new Date();
    let tweetDate = dateTime.toISOString().slice(0, 10);
    try {
        let tweetData = await T.get('search/tweets', {
            q: `${searchText} since:${tweetDate}`,
            count: 100
        });
        if (tweetData) {
            count = tweetData.data.statuses;
        }
        res.status(200).json({ counts: count.length });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ msg: "Server Error" });

    }
});

module.exports = router;