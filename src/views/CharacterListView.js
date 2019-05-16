import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isFetching && (
          <div>
            <h2>Fetching character data...</h2>
          </div>
        )}
        {this.props.error && (
          <div>
            <h2>{this.props.error}</h2>
          </div>
        )}
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
