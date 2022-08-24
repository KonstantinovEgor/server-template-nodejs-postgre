const publicRoutes = require('./routes/public.router');
const privateRoutes = require('./routes/private router');

require('dotenv')
    .config();

const config = {
    migrate: false,
    publicRoutes,
    privateRoutes,
    port: process.env.PORT || 1515,
    host: process.env.HOST || 'localhost',
    environment: process.env.NODE_ENV || 'development'
};

module.exports = config;