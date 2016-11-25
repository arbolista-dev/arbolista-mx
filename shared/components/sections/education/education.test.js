/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Education from './education.component';

describe('Education component', ()=>{
  it('renders without problems', (done)=>{
      education = TestUtils.renderIntoDocument(React.createElement(Education) );
      expect(education.state).toEqual({});
      done();
  });
});
