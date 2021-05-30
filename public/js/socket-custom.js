let socket = io();

//On to listen the server
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos la conexion con el servidor');
});

//Emit send data
socket.emit('sendMessage', {
    user: 'Francisco',
    message: 'My message'
}, (resp) => {
    console.log('Response Server', resp)
});

//Listen data
socket.on('sendMessage', (data) => {
    console.log('Sevidor:', data);
});