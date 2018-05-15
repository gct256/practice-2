import {
  entry,
  entryActionCreators,
  entryActionTypes,
} from '../../src/main/entry';

describe('entry', () => {
  describe('action creator', () => {
    test('add', () => {
      expect(entryActionCreators.add('foo')).toEqual({
        type: entryActionTypes.ADD_ENTRY,
        payload: { entryId: 'foo' },
      });
    });

    test('remove', () => {
      expect(entryActionCreators.remove('foo')).toEqual({
        type: entryActionTypes.REMOVE_ENTRY,
        payload: { entryId: 'foo' },
      });
    });
  });

  describe('reducer', () => {
    test('empty', () => {
      expect(entry().toJS()).toEqual({});
    });

    test('add', () => {
      const state0 = entry(undefined, entryActionCreators.add('foo'));
      expect(state0.toJS()).toEqual({
        foo: { entryId: 'foo' },
      });

      const state1 = entry(state0, entryActionCreators.add('bar'));
      expect(state1).not.toBe(state0);
      expect(state1.toJS()).toEqual({
        foo: { entryId: 'foo' },
        bar: { entryId: 'bar' },
      });

      const state2 = entry(state1, entryActionCreators.add('baz'));
      expect(state2).not.toBe(state0);
      expect(state2).not.toBe(state1);
      expect(state2.toJS()).toEqual({
        foo: { entryId: 'foo' },
        bar: { entryId: 'bar' },
        baz: { entryId: 'baz' },
      });

      const state3 = entry(state2, entryActionCreators.add('foo'));
      expect(state3).toBe(state2);
    });
  });

  test('remove', () => {
    const state0 = entry(undefined, entryActionCreators.add('foo'));
    const state1 = entry(state0, entryActionCreators.add('bar'));
    const state2 = entry(state1, entryActionCreators.add('baz'));

    const state3 = entry(state2, entryActionCreators.remove('bar'));
    expect(state3).not.toBe(state2);
    expect(state3.toJS()).toEqual({
      foo: { entryId: 'foo' },
      baz: { entryId: 'baz' },
    });

    const state4 = entry(state3, entryActionCreators.remove('bar'));
    expect(state4).toBe(state3);
  });
});
