const ormConf = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "database": "albumsdb",
    "entities": [
        `dist/**/**.model{.ts,.js}`
    ],
    "migrations": [`dist/migration/**/*{.ts,.js}`],
    cli: {
    migrationsDir: 'src/migration',
    },
    "synchronize": false,
    "timezone":'Z',
    "logging": true
 }


 module.exports = ormConf
