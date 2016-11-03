/*global module*/

import React from 'react';

import template from './experience.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class ExperienceComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

}

ExperienceComponent.propTypes = {
	info: React.PropTypes.object.isRequired,
};

module.exports =  ExperienceComponent;
