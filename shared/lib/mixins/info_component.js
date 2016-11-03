import React from 'react';

export default function(superclass){

  return class extends superclass {


    getText(key) {
      let component = this;
      let value;
      if(component.props.info && key instanceof Array) 
        value = component.props.info.getIn(["data",...key]);
      else(component.props.info && key instanceof String) 
        value = component.props.info.getIn(["data",key]);
      return value ? value : "";
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
