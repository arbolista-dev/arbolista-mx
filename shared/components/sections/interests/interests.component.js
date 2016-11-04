/*global module*/

import React from 'react';

import template from './interests.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';

class InterestsComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

}

InterestsComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports =  InterestsComponent;
