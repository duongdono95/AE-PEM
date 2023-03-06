/* eslint-disable @typescript-eslint/no-misused-promises */
import { MiddlewareAPI } from 'redux';

import { ThunkMiddleware } from 'redux-thunk';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { pemActions, PEMActions } from './actions';
import { getUserInfo, connect } from './pemAPI';

// eslint-disable-next-line @typescript-eslint/ban-types
export const pemMiddleware = (): ThunkMiddleware => {
  return (api: MiddlewareAPI) => {
    void connect().then(() => {
      void getUserInfo().then(user => {
        api.dispatch(pemActions.connected(user));
      });
    });
    return next => (action: PEMActions) => {
      switch (action.type) {
        case 'pem/connect':
          console.log('connecting');

          break;
        default:
          if (process.env.NODE_ENV === 'development') {
            const newEvent = new Date().getTime();

            console.log(newEvent, action);
          }
          return next(action);
      }
    };
  };
};

export default pemMiddleware();
