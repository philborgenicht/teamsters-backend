module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://ojvjbboiytxlcb:22e581d5c860cecf48b16cd2d5698ec8a1a02f361afade1484121f4d740aa27a@ec2-54-225-237-84.compute-1.amazonaws.com:5432/d1jcd6c9ic76lv'
  },
  test: {
    client: 'pg',
    connection: 'postgres://ojvjbboiytxlcb:22e581d5c860cecf48b16cd2d5698ec8a1a02f361afade1484121f4d740aa27a@ec2-54-225-237-84.compute-1.amazonaws.com:5432/d1jcd6c9ic76lv'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
