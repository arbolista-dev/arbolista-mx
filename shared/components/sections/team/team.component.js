/*global module*/

import React from 'react';

import template from './team.rt.html';
import InfoComponent from 'shared/lib/mixins/info_component';
import SpikeComponent from 'espina/shared/base_component';
import {alias} from 'shared/data/arbolista';

class TeamComponent extends InfoComponent(SpikeComponent) {


	get template(){
		return template;
	}

}

TeamComponent.propTypes = {
	info: React.PropTypes.string.isRequired
};

module.exports =  TeamComponent;
