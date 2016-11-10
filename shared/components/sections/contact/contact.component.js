/*global module*/

import React from 'react';
import superagent from 'superagent';
import template from './contact.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class ContactComponent extends InfoComponent(SpikeComponent) {

	constructor(props, context) {
    super(props, context);
		let contact = this;
		contact.valid = {
			name: false,
			email: false,
			message: false
		};
		contact.state = {
			name: '',
			email: '',
			message: ''
		}
	}

	get captcha_site_key(){
		return CAPTCHA_SITE_KEY;
	}

	updateInput(event) {
    event.preventDefault();

    let contact = this,
        api_key = event.target.dataset.api_key,
        update = {
          [api_key]: event.target.value
        };

    contact.valid[api_key] = contact.validateParameter(update);
    contact.setState(update);
  }

	paramValid(param){
		return (this.state[param].length > 0) ? this.valid[param] : true;
	}

	validateParameter(parameter) {
		let key = Object.keys(parameter)[0],
				value = Object.values(parameter)[0],
				re;
		switch (key) {
		case 'name':
			re = /^[A-Za-z0-9 ]{4,20}$/;
			break;
		case 'email':
			re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			break;
		case 'message':
			return value.length > 5;
		default:
			break;
		}
		return re.test(value);
	}

	validateAll(){
    let contact = this,
        all_valid = Object.values(contact.valid).filter(item => item === false);
    return all_valid.length > 0 ? false : true;
  }

	submitMail(event){
		event.preventDefault();

		let contact = this,
		recaptcha_response = $('#g-recaptcha-response').val();

		contact.setState({success: false, error: false});

		if (contact.validateAll() && recaptcha_response){
			let params = Object.assign({}, contact.state, {recaptcha: recaptcha_response})
			contact.sendMail(params)
				.then(response => contact.setState({success: true}))
				.catch(response => contact.setState({error: true}));
		} else {
			contact.setState({error: true});
		}
	}

	sendMail(params){
		return new Promise((fnResolve, fnReject)=>{
			superagent.post('/sendmail')
				.set('Content-Type', 'application/json')
				.send(params)
				.end((err, res)=>{
					if (err) fnReject(err);
					else fnResolve(res.body);
				});
		});
	}

	get template(){
		return template;
	}
}

ContactComponent.propTypes = {
	info: React.PropTypes.string.isRequired,
};

module.exports =  ContactComponent;
