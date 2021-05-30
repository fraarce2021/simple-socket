const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        usuario: 'Administrator',
        message: 'Welcome'
    });

    client.on('disconnect', (client) => {
        console.log('Usuario desconectado');
    });

    //Listen client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        // if (message.user) {
        //     callback({
        //         resp: 'BE ALL RIGHT'
        //     });
        // } else {
        //     callback({
        //         resp: 'BE ALL WRONG'
        //     });
        // }

    });
});