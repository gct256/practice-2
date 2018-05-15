import { Action } from 'redux';
import { Record, OrderedMap } from 'immutable';

// action type

const ADD_ENTRY: 'ADD_ENTRY' = 'ADD_ENTRY';
const REMOVE_ENTRY: 'REMOVE_ENTRY' = 'REMOVE_ENTRY';

export const entryActionTypes = {
  ADD_ENTRY,
  REMOVE_ENTRY,
};

// action

interface AddEntryAction extends Action<typeof ADD_ENTRY> {
  payload: {
    entryId: string;
  };
}

interface RemoveEntryAction extends Action<typeof REMOVE_ENTRY> {
  payload: {
    entryId: string;
  };
}

export type EntryAction = AddEntryAction | RemoveEntryAction;

// action creator

export const entryActionCreators = {
  add(entryId: string): AddEntryAction {
    return {
      type: ADD_ENTRY,
      payload: { entryId },
    };
  },

  remove(entryId: string): RemoveEntryAction {
    return {
      type: REMOVE_ENTRY,
      payload: { entryId },
    };
  },
};

// data

export class Entry extends Record({ entryId: '' }) {
  readonly entryId: string;

  constructor(entryId: string) {
    super({ entryId });
  }
}

// state

export type EntryState = OrderedMap<string, Entry>;

// reducer

export function entry(
  state: EntryState = OrderedMap(),
  action?: EntryAction,
): EntryState {
  if (!action) return state;

  switch (action.type) {
    case ADD_ENTRY: {
      const { entryId } = action.payload;
      if (state.has(entryId)) return state;
      return state.set(entryId, new Entry(entryId));
    }

    case REMOVE_ENTRY: {
      return state.delete(action.payload.entryId);
    }

    default:
      return state;
  }
}
