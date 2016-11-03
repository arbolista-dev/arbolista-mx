/*global module*/

import React from 'react';
import SpikeComponent from 'espina/shared/base_component';
import template from './resume.rt.html';

class ResumeComponent extends SpikeComponent {

  get template(){
    return template;
  }

}

ResumeComponent.propTypes = {
	info: React.PropTypes.object.isRequired,
};

module.exports= ResumeComponent;
