import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'bdcopa'
})

connection.connect()

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto de Promise
 */
export const consulta = (sql, valores='', mensagemReject ) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, valores, (erro, result) => {
            if (erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default connection;