import express from 'express';
import os from 'os'
import webpack from 'webpack';
import path from 'path';
import ServerBase from '../server.base';
import serverRenderable from 'server/lib/mixins/server_renderable';

const APP_PORT = 3000;

/*global console*/

class Server extends serverRenderable(ServerBase) {

  constructor(){
    super();
    var server = this;
    server.app = express();
  }

  run(){
    var server = this;

    // returns a Compiler instance
    //webpack(webpack_config, function(err, stats) {
    
      server.config();
      server.app.set('views', path.resolve(__dirname, 'views'));
      server.app.listen(APP_PORT, () => {
        console.info(`App is now running on http://localhost:${APP_PORT}`);
      });
    //});
  }

}

export default Server;
