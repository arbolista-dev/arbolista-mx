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

	getSocialLinkClass(title){
		return this.t(`icons.${title}`);
	}

	get nextLanguageLink() {
		let component = this;
		let link = component.getText('link');
		return (link!="link")? `/${component.t('buttons.next_language_url')}/${link}` : `/${component.t('buttons.next_language_url')}`
	}
}

HeaderComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports = HeaderComponent;
