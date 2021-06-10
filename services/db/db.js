var mysql = require("mysql");

//Configuracion DB (debe ir con variables de entorno)
const configuration = {
    host:'localhost',
    database:"spotifysongguesser",
    user:'root',
    password:""
}

//Funcion para hacer cualquier consulta a DB
const query =  (query, params) =>{

    const connection = mysql.createConnection(configuration);
    connection.connect();
    return new Promise((resolve,reject)=>{
        if(params){
            connection.query(query,params,(err,rows,fields)=>{
                connection.end();
                return err ? reject(err): resolve(rows);
            });
        }
        else{
            connection.query(query,(err,rows,fields)=>{
                connection.end();
                return err ? reject(err): resolve(rows);
            });
        }
    })
}

module.exports = {
    query
}