/*global module*/

import React from 'react';

import template from './skills.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class SkillsComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

}

SkillsComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports =  SkillsComponent;
