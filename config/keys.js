require('dotenv').config()
module.exports = {
    mongoURI: process.env.REACT_APP_URI,
    secretOrKey: process.env.REACT_APP_SECRETORKEY
}