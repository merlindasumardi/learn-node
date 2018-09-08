// - Dependency

// - container
const config = {};

// - create value object development
config.development = {
    port: 3000,
    mysql: {
        dialect: 'mysql',
        database: 'learn_node_db',
        username: 'root',
        password: 'toor',
        host: 'localhost'
    }
};

// - create value object test
config.test = {
    port: 3000,
    mysql: {
        dialect: 'mysql',
        database: 'learn_node_db',
        username: 'root',
        password: 'toor',
        host: 'localhost'
    }
};

// - create value object prod
config.prod = {
    port: process.env.PORT,
    mysql: {
        dialect: process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST
    }
};

// - get configuration
config.getDefaultConfiguration = () => {
    return config[process.env.NODE_ENV] || config.development;
};

// - module export
module.exports = config;