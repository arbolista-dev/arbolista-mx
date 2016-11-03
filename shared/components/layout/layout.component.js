/*global module Promise document window DESIGN*/

import React from 'react';

import SpikeComponent from 'espina/shared/base_component';
import layoutContainer from './layout.container';
const Header = require('../header/header.component'),
    Footer = require('../footer/footer.component');

class LayoutComponent extends SpikeComponent {

  constructor(props, context) {
    super(props, context);
    var layout = this;
    layout.state = {};
  }

  get current_route(){
    return this.router.routes.findByName(this.route_name);
  }

  get route_name() {
    return this.props.location.get('routeName');
  }

  componentDidMount() {
    let layout = this;
    layout.props.ensureInfo();
  }

  render(){
    let CurrentLayout = this.current_route.component;
    return (
      <div id="layout">
        <Header info={this.props.info}/>
        <CurrentLayout info={this.props.info}/>
        <Footer/>
      </div>
    )
  }

}

LayoutComponent.propTypes = {
  location: React.PropTypes.object.isRequired,
  info: React.PropTypes.object.isRequired 
}

module.exports = layoutContainer(LayoutComponent);
