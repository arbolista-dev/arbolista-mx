/*global describe it expect console*/

import TestUtils from 'react-addons-test-utils';
import React from 'react';

import Contact from './contact.component';

describe('Contact component', ()=>{
  it('renders without problems', (done)=>{
      contact = TestUtils.renderIntoDocument(React.createElement(Contact) );
      expect(contact.state).toEqual({});
      done();
  });
});
