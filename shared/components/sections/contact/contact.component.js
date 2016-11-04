/*global module*/

import React from 'react';

import template from './contact.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class ContactComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

}

ContactComponent.propTypes = {
	info: React.PropTypes.string.isRequired,
};

module.exports =  ContactComponent;
