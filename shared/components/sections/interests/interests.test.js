/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Interests from './interests.component';

describe('Interests component', ()=>{
  it('renders without problems', (done)=>{
      interests = TestUtils.renderIntoDocument(React.createElement(Interests) );
      expect(interests.state).toEqual({});
      done();
  });
});
