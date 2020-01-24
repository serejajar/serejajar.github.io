// import React from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { TableComponent } from '../components';
// import { changeColumnTitle, changeRowValue, changeRowTotalValue } from '../store';

function TableContainer(props) {
  return (
    <TableComponent
      columns={props.columns}
      rows={props.rows}
      changeColumnTitle={props.changeColumnTitle}
      changeRowValue={props.changeRowValue}
      changeRowTotalValue={props.changeRowTotalValue}
    />
  );
}

TableContainer.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.object,
  changeColumnTitle: PropTypes.func,
  changeRowValue: PropTypes.func,
  changeRowTotalValue: PropTypes.func
};


const pageMapStateToProps = store => ({
  columns: store.columns,
  rows: store.rows,
})

const mapDispatchToProps = dispatch => ({
  changeColumnTitle: (i, title) => dispatch(changeColumnTitle(i, title)),
  changeRowValue: (prop, title) => dispatch(changeRowValue(prop, title)),
  changeRowTotalValue: total => dispatch(changeRowTotalValue(total))
})

// export default connect(
TableContainer = ReactRedux.connect(
  pageMapStateToProps,
  mapDispatchToProps,
)(TableContainer)
