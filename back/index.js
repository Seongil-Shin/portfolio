import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server = new GraphQLServer({
   typeDefs: "graphql/schema.graphql",
   resolvers: resolvers,
});

const { sequelize } = require("./models");

sequelize
   .sync({ force: false })
   .then(() => {
      console.log("데이터베이스 연결 성공");
   })
   .catch((err) => {
      console.error(err);
   });

server.start(() => console.log("graph Ql server running"));
