import * as React from 'react';
import { EntryState } from '../main/entry';
import { connect } from 'react-redux';
import { MainState } from '../main';

type StateProps = {
  entry: EntryState;
};

type DispatchProps = {};

type Props = StateProps & DispatchProps;

class EntryListBase extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props): boolean {
    return this.props.entry !== nextProps.entry;
  }

  render() {
    return (
      <div>
        {this.props.entry
          .toArray()
          .map((entry) => <p key={entry.entryId}>{entry.entryId}</p>)}
      </div>
    );
  }
}

function mapStateToProps(state: MainState): StateProps {
  return {
    entry: state.entry,
  };
}

export const EntryList = connect(mapStateToProps)(EntryListBase);
