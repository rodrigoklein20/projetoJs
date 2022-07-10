const Client = require('pg').Client
const bd = new Client({
    user: "postgres",
    password: " ",
    host: "127.0.0.1",
    port: 5432,
    database: " "
})

function executarQuery(query){
    bd.connect();
    bd.query(query)
    .then(results => {
        const resultado = results.rows
        console.log(resultado)
    })
    .finally(() => bd.end())
}
