module.exports = {

  development: {
    client: 'pg',
    connection: 'postgrees://localhost/movie'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
