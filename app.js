const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        name: "Suvonov Sherzod",
        uni: "Toshkent Davlat Iqtisodiyot Universiteti",
        group: "SSE-50/24"
    });
});

app.listen(3000, () => console.log("Server ishlayapti: http://localhost:3000"));