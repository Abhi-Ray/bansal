import mysql from 'mysql2';

const isProd = process.env.NODE_ENV === 'production';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: isProd ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
  password: isProd ? process.env.DB_PASS_PROD : process.env.DB_PASS_DEV,
  database: process.env.DB_NAME || 'bansal',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

export default connection;
