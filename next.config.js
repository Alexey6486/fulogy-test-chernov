require('dotenv').config();
const withImages = require('next-images');

module.exports = {
    env: {
        API_URL: process.env.API_HIDE
    }
}
module.exports = withImages();
