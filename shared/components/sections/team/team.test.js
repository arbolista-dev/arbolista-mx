/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Team from './team.component';

describe('Team component', ()=>{
  it('renders without problems', (done)=>{
      team = TestUtils.renderIntoDocument(React.createElement(Team) );
      expect(team.state).toEqual({});
      done();
  });
});
