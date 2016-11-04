/*global module*/

import React from 'react';

import template from './resume.rt.html';
import SpikeComponent from 'espina/shared/base_component';

class ResumeComponent extends SpikeComponent {

  get template(){
    return template;
  }

  get is_resume(){
    return this.props.info === 'Resume';
  }

}

ResumeComponent.propTypes = {
	info: React.PropTypes.string.isRequired,
};

module.exports= ResumeComponent;
