import { createAction } from 'redux-act';
import InfoApi from "api/info.api" 

export const ensureInfo = createAction('Retrieve Info');
export const infoRetrieved = createAction('Info successfully retrieved.');
export const infoRetrievalError = createAction('Error getting Info.');

export function doEnsureInfo(){
  let api = new InfoApi();
  return api.info()
    .then(infoRetrieved)
    .catch(infoRetrievalError);
}
