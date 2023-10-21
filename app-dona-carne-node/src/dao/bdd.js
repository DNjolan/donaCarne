import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '12345678',
    database: 'dona_carne_dos',
}

export const conexion = await mysql.createConnection(config)
