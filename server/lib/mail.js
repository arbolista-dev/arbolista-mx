import superagent from 'superagent';

function verifyCaptcha(req){
  let params = {
    secret: CAPTCHA_SECRET_KEY,
    response: req.recaptcha
  }
  return new Promise((fnResolve, fnReject)=>{
    superagent.post('https://www.google.com/recaptcha/api/siteverify')
      .set('Content-Type', 'application/json')
      .send(params)
      .end((err, res)=>{
        if (err) fnReject(err);
        else res.statusCode === 200 ? fnResolve(res.statusCode) : fnReject(res.statusCode);
      });
  });
}

export default function sendMail(params){
  let compose = {
    "personalizations": [{
        "to": [{
            "email": "manub1312@gmail.com",
            "name": "Arbolista Development"
        }],
        "substitutions": {
            "contact_email": params.email,
            "contact_name": params.name,
            "contact_message": params.message
        }
    }],
    "from": {
        "email": params.email,
        "name": params.name
    },
    "template_id": SENDGRID_TEMPLATE_ID
  };

  return new Promise((fnResolve, fnReject)=>{
    verifyCaptcha(params).then((api_res)=>{
      superagent.post('https://api.sendgrid.com/v3/mail/send')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + SENDGRID_TOKEN)
        .send(compose)
        .end((err, res)=>{
          if (err) fnReject(err);
          else fnResolve(res);
        });
    });
  })
}
