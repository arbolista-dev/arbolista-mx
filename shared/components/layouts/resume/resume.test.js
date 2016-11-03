/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Resume from './resume.component';

describe('Resume component', ()=>{
  it('renders without problems', (done)=>{
      resume = TestUtils.renderIntoDocument(React.createElement(Resume) );
      expect(resume.state).toEqual({});
      done();
  });
});
