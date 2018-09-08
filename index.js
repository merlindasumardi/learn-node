const express = require ('express');
const app = express();
const { port } = require ('./src/config/app.config').getDefaultConfiguration();
const sequelize = require ('./src/models');

//integrate with console.stamp
require('console-stamp')(console, {
    colors: {
        stamp: 'yellow',
        label: 'white'
    }
}) 

app.get('/',(req, res) => {
    res.send({
        'message': 'hello world'
    })
});

sequelize.authenticate().then(() => {
    console.log('connection success');
}).catch(err => {
    console.log(err);
});

const PORT = port;
app.listen(PORT, () => {
    console.log(`App listen to port ${PORT}`);
});