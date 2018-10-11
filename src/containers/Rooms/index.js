import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Kitchen from '../../rooms/Kitchen';
import Parvis from '../../rooms/Parvis';
import { addMessage } from '../../redux/messages';
import { moveToRoom, setRoomAsVisited } from '../../redux/rooms';
import { addInInventory } from '../../redux/items';

const Rooms = {
  Kitchen,
  Parvis,
};

const mapStateToProps = state => {
  const { rooms, items } = state;

  return {
    ...rooms.byId[rooms.active],
    items,
  };
};

const mapDispatchToProps = dispatch => ({
  addMessage: bindActionCreators(addMessage, dispatch),
  moveToRoom: bindActionCreators(moveToRoom, dispatch),
  setRoomAsVisited: bindActionCreators(setRoomAsVisited, dispatch),
  addInInventory: bindActionCreators(addInInventory, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const Component = Rooms[props.component];
  return <Component {...props} />;
});
