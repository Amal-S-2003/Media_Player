const JSONServer = require("json-server"); //json server creation
const MpServer = JSONServer.create(); //creating our server
const router = JSONServer.router("db.json"); //router
const middleware = JSONServer.defaults(); //middleware creation

const PORT = 3000 || process.env.PORT; //creating a server with port 3000 or if 3000 is busy then create random server by using process.env.PORT

MpServer.use(middleware);
MpServer.use(router);
MpServer.listen(PORT, () => {
  console.log(
    `Media-Player Server started running  at PORT:${PORT} & waiting for the client request`
  );
});
