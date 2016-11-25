/*global GLOBAL process __dirname require*/

require('app-module-path').addPath(__dirname);
require('dotenv').config();

import path from 'path';
import { argv } from 'yargs';

GLOBAL.NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
GLOBAL.CAPTCHA_SECRET_KEY = process.env.CAPTCHA_SECRET_KEY;
GLOBAL.SENDGRID_TOKEN = process.env.SENDGRID_TOKEN;
GLOBAL.SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;
GLOBAL.RECIPIENT = process.env.RECIPIENT;

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
