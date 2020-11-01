const express = require('express');
const newSsoUserRoute = require ('./routes/ssouser');
// const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000

app.use(express.json())
// app.use(cors())

app.use('/ssouser', newSsoUserRoute);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});