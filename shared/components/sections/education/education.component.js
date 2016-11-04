/*global module*/

import React from 'react';

import template from './education.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class EducationComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}
	
}

EducationComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports =  EducationComponent;
