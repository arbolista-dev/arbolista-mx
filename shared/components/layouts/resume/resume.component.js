/*global module*/

import React from 'react';

import template from './resume.rt.html';
import SpikeComponent from 'espina/shared/base_component';

class ResumeComponent extends SpikeComponent {

  get template(){
    return template;
  }

  get team_member(){
    // return one of the three of us
    return undefined;
  }

}

ResumeComponent.propTypes = {
	info: React.PropTypes.string.isRequired,
};

module.exports= ResumeComponent;
