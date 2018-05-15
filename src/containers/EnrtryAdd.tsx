import * as React from 'react';
import { TextInput } from '../components/controls/TextInput';
import { Button } from '../components/controls/Button';
import { connect } from 'react-redux';
import { entryActionCreators } from '../main/entry';

type Props = {
  addEntry: (entryId: string) => void;
};

type State = {
  canAdd: boolean;
  entryId: string;
};

class EntryAddBase extends React.Component<Props, State> {
  state: State = {
    canAdd: false,
    entryId: '',
  };

  render() {
    const { addEntry } = this.props;
    const { canAdd, entryId } = this.state;
    return (
      <div className="field is-grouped">
        <p className="control is-expanded">
          <TextInput
            value={entryId}
            onInput={(text) => {
              this.setState({
                entryId: text,
                canAdd: text.length > 0,
              });
            }}
          />
        </p>
        <p className="control">
          <Button
            disabled={!this.state.canAdd}
            label="Add Entry"
            onClick={() => {
              if (canAdd) {
                addEntry(entryId);
                this.setState({
                  entryId: '',
                  canAdd: false,
                });
              }
            }}
          />
        </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEntry(entryId: string) {
      dispatch(entryActionCreators.add(entryId));
    },
  };
}

export const EntryAdd = connect(undefined, mapDispatchToProps)(EntryAddBase);
