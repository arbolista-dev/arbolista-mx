/*global __dirname process*/

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import Backend from 'i18next-node-fs-backend';
import sendMail from 'server/lib/mail';
import i18nFactory from 'shared/lib/i18n/i18nFactory';

class ServerBase {

  config(){
    var server = this,
        app = server.app;

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());

    // serve public static files.
    app.use('/', express.static(path.resolve(__dirname, '../../client/build', process.env.NODE_ENV)));
    app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

    //app.use(favicon(__dirname + '/../assets/favicon.ico'));
    app.use(logger('dev'));

    // view engine set up
    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, '..', 'views'));

    app.post('/sendmail', (req, res)=>{
      sendMail(req.body)
        .then(api_res => res.sendStatus(api_res.status))
        .catch(api_err => res.sendStatus(api_err.status))
    })

    app.get('*', server.handleRequest.bind(server));
  }

  setTranslations(req){
      // get the language from url
    // or from cookie
    // or fallback to english
    let lang = (req.query && req.query.lang) ||
      (req.cookies && req.cookies['lang']);

    let i18n;

    return new Promise((resolve, reject) => {
      try {
        i18n = i18nFactory(__dirname+"/../", Backend, resolve);
      } catch (e) {
        reject(e);
      }
    })
    .then(() => {
      return new Promise((resolve, reject) => {
        try {
          if (lang && lang !== i18n.language) {
            i18n.changeLanguage(lang, () => {
              resolve(i18n);
            });
          } else {
            lang = i18n.language;
            resolve(i18n);
          }
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  handleErr(res, err){
    res.set('Content-Type', 'text/html');
    let prerender_content;
    console.error('Error handling response')
    console.error(err);
    console.error(err.stack);
    if (process.env.NODE_ENV.toLowerCase() === 'production'){
      prerender_content = '<div class="alert alert-danger">Server Error</div>';
    } else {
      prerender_content = err;
    }
    res.render('index', {
      prerender_content: prerender_content,
      meta: {}
    });
    return undefined;
  }

}

export default ServerBase;
