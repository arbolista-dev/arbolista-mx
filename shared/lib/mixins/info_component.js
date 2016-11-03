import React from 'react';
import {alias} from 'shared/data/arbolista'
export default function(superclass){

  return class extends superclass {

    getText(key) {
      /*let component = this;
      let value;
      if(component.props.info && key instanceof Array) 
        value = component.props.info.getIn(["data",...key]);
      else(component.props.info && key instanceof String) 
        value = component.props.info.getIn(["data",key]);
      return value ? value : "";*/
      const route = this.props.info;
      if (route == "Resume")
        return this.context.i18n.t(key);
      return this.context.i18n.t(`Members.${alias[route]}.${key}`);
    }

    getJoinText(key) {
      let component = this;
      let text =  component.getText(key);
      if(text instanceof Array)
        return text.join(" ");
      return text;
    }

  }

}
