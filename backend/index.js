require("dotenv").config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;

const app = express();

const firebaseConfigProtected = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json(firebaseConfigProtected);
})

app.listen(PORT, () => console.log(`server is serving on port ${PORT}`));