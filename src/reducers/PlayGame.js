import * as types from '../constants/ActionTypes';
import { List } from 'immutable';
import { combineReducers } from 'redux';

class playGameClass {
  static playGame (state = List(), action) {
    switch (action.type) {
      case types.TAKE_NUMBER:
        return state.map(gameItem => {
          if (gameItem.get('selected') === action.selected) {
            return gameItem.update('disable', v => !v);
          }
        });
    }
  }
};

export default combineReducers(playGameClass);
