// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { ColumnForm } from '../components'
// import { addColumn } from '../store'

function ColumnFormContainer(props) {
  const { addColumn, closePopup } = props

  return (
    <ColumnForm
      addColumn={addColumn}
      closePopup={closePopup}
    />
  );
}

// export default connect(
ColumnFormContainer = ReactRedux.connect(
  null,
  dispatch => ({
    addColumn: data => dispatch(addColumn(data)),
  })
)(ColumnFormContainer)

ColumnFormContainer.propTypes = {
  addColumn: PropTypes.func,
  closePopup: PropTypes.func,
};
