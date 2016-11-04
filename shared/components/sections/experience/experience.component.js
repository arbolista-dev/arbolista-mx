/*global module*/

import React from 'react';

import template from './experience.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class ExperienceComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

	get section_title(){
		return this.is_resume ? this.t('sections.projects') : this.t('sections.work_experience');
	}

	get experiences(){
		return this.is_resume ? this.getText('projects') : this.getText('experience');
	}

}

ExperienceComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports =  ExperienceComponent;
