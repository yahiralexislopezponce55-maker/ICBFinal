'use  strict'

const App = require('./app/app');

const PORT = process.env.PORT || 3000;

App.listen(parseInt(PORT),function(error ){
    if(error) return console.error(error)
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

