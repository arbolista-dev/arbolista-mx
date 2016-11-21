/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Skills from './skills.component';

describe('Skills component', ()=>{
  it('renders without problems', (done)=>{
      skills = TestUtils.renderIntoDocument(React.createElement(Skills) );
      expect(skills.state).toEqual({});
      done();
  });
});
