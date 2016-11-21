import React from 'react';
import {alias} from 'shared/data/arbolista'
export default function(superclass){

  return class extends superclass {

    get is_resume(){
      return this.props.info === 'Resume';
    }

    getText(key) {
      const route = this.props.info;
      if (this.is_resume)
        return this.context.i18n.t(key, {returnObjects: true});
      return this.context.i18n.t(`members.${alias[route]}.${key}`, {returnObjects: true});
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
