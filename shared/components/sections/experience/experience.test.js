/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Experience from './experience.component';

describe('Experience component', ()=>{
  it('renders without problems', (done)=>{
      experience = TestUtils.renderIntoDocument(React.createElement(Experience) );
      expect(experience.state).toEqual({});
      done();
  });
});
