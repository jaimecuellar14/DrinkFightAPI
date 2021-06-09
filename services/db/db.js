var mysql = require("mysql");

//Configuracion DB (debe ir con variables de entorno)
const configuration = {
    host:'localhost',
    database:"spotifysongguesser",
    user:'root',
    password:""
}

//Funcion para hacer cualquier consulta a DB
const query =  (query) =>{
    const connection = mysql.createConnection(configuration);
    connection.connect();
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,rows,fields)=>{
            connection.end();
            return err ? reject(err): resolve(rows);
        });
    })
}

module.exports = {
    query
}