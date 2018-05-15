import { Store, createStore, Reducer, combineReducers } from 'redux';
import { entry, EntryAction, EntryState } from './entry';

export type MainState = {
  entry: EntryState;
};

export type MainAction = EntryAction;

const mainReducer: Reducer<MainState, MainAction> = combineReducers({
  entry,
});

export const mainStore: Store<MainState, MainAction> = createStore(mainReducer);
