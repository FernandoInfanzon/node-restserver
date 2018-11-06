// Puerto

process.env.PORT = process.env.PORT || 3000;


// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento token
process.env.CADUCIDAD_TOKEN = '30d';

// SEED de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//BD

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '985928744541-et0kqha981lso57kji9opsp554m4gj03.apps.googleusercontent.com';