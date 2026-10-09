const { crearServidor } = require('./app');

const puerto = process.env.PORT || 3000;
crearServidor().listen(puerto, () => {
  console.log(`Escuchando en el puerto ${puerto}`);
});