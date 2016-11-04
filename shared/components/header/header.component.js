/*global module*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';
import InfoComponent from 'shared/lib/mixins/info_component';
import template from './header.rt.html';

class HeaderComponent extends InfoComponent(SpikeComponent) {

	get template(){
		return template;
	}

	get experiences_title(){
		return this.is_resume ? this.t('sections.projects') : this.t('sections.work_experience');
	}
}

HeaderComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports = HeaderComponent;
