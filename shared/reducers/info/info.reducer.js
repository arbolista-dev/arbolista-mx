import * as Immutable from 'immutable';
import { loop, Effects } from 'redux-loop';
import { createReducer } from 'redux-act';

import {
  ensureInfo,
  doEnsureInfo,
  infoRetrieved,
  infoRetrievalError
} from 'shared/reducers/info/info.actions';

export const INITIAL = Immutable.fromJS({
  data: undefined,
  loading: false,
  load_error: false
});


const ACTIONS = {

  // Load latest Info
  [ensureInfo]: (data)=>{
    if (!data.get('loading') && data.get('data') === undefined){
      return loop(
        data
          .set('loading', true)
          .set('load_error', false),
        Effects.promise(doEnsureInfo)
      )
    }
    return data;
  },

  // Info from API response.
  [infoRetrieved]: (data, res)=>{
    return data
          .set('data', Immutable.fromJS(res))
          .set('loading', false)
          .set('load_error', false);
  },

  [infoRetrievalError]: (data, _res)=>{
    return data
          .set('loading', false)
          .set('load_error', true);
  }

};

const REDUCER = createReducer(ACTIONS, INITIAL);

export default REDUCER;
