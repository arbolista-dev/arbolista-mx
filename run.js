/*global GLOBAL process __dirname require*/

require('app-module-path').addPath(__dirname);

import path from 'path';
import { argv } from 'yargs';

GLOBAL.NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
GLOBAL.API_BASE_URL = process.env.API_BASE_URL = argv.api_base_url || '';

var env_server_class;
switch(NODE_ENV){
	case 'design':
		env_server_class= require("./server/config/design/server").default;
	break;
	case 'development':
		env_server_class= require("./server/config/development/server").default;
	break;
	case 'production':
		env_server_class= require("./server/config/production/server").default;
	break;
}
var server = new env_server_class();

server.run();
