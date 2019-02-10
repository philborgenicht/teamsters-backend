module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/walterwhite'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/walterwhite'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
