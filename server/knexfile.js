module.exports = {
  development:{

    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'fitness_script',
      user: 'root',
      password: 'rootroot',
      charset: "utf8"
    },
  },

  production:{
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  }
};
