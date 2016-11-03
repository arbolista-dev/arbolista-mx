import BaseApi from './base.api';
import Arbolista from 'shared/data/arbolista'


export default class InfoApi extends BaseApi {

  info(){
    return this.delayResolve(Object.assign({},Arbolista));
  }

}
