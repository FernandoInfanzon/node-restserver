// Puerto

process.env.PORT = process.env.PORT || 3000;


// ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//BD

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:Lf123456@ds123971.mlab.com:23971/cafe';
}

process.env.URLDB = urlDB;