const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: "ec2-35-153-91-18.compute-1.amazonaws.com",
          port: 5432,
          database: "dcdjtshv3dr7c3",
          username: "dyhvhpvquakdqv",
          password: "91bdbd3fc11c4ee8852e8de45cf7a3dc60a2bbad4be2001c6ae3f10ba41be3b8",
          ssl: { rejectUnauthorized: false },
          options: {  ssl: true },
        },
      },
    },
  };
};
