require('dotenv').config();
const express = require('express');
const propertiesRoutes = require('./routes/properties');
const userRoutes = require('./routes/user');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use('/api/properties', propertiesRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(process.env.PORT || 3002);
