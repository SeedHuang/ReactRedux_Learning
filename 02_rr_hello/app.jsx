import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ToDoList from './todolist';
import actionTypes from './actions';

const dataSource = [
  {id: 123, name: 'Seed Huang'},
  {id: 234, name: 'Sky Huang'},
  {id: 345, name: 'Ocean Huang'},
  {id: 456, name: 'Earth Huang'},
  {id: 567, name: 'Blue Huang'},
];

class TheList extends React.PureComponent {
  render() {
    return <ToDoList {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedMember: state.selectedMember,
    dataSource: dataSource
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch({type: actionTypes.selectedMember, id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheList);
