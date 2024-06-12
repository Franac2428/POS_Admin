const express = require('express');
const mysqldump = require('mysqldump');
const path = require('path');
require('dotenv').config();

const app = express();

app.get('/backups', async (req, res) => {
    const user = process.env.MYSQL_USER;
    const password = process.env.MYSQL_PASSWORD;
    const database = process.env.MYSQL_DATABASE;
    const backupPath = process.env.BACKUP_PATH;
    const fileName = `${database}-backup.sql`;
    const filePath = path.join(backupPath, fileName);

    try {
        await mysqldump({
            connection: {
                host: 'localhost',
                user: user,
                password: password,
                database: database,
            },
            dumpToFile: filePath,
        });

        res.download(filePath, fileName, (err) => {
            if (err) {
                console.error(`Error al descargar el respaldo: ${err.message}`);
                return res.status(500).send('Error al descargar el respaldo');
            }
        });
    } catch (error) {
        console.error(`Error al generar el respaldo: ${error.message}`);
        res.status(500).send('Error al generar el respaldo');
    }
});

app.listen(3001, () => {
    console.log('Server run on port 3001');
});
