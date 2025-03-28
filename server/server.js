const express = require('express');
const app = express();
const cors = require('cors');
const DB = require('./Lib/DB');
require('dotenv').config();
DB()

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1', require('./Routes/userroutes'));
app.use('/api/v1', require('./Routes/reportRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})