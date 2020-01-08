// import React from 'react';
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { TableComponent } from '../components';
// import { changeColumnTitle, changeRowValue, changeRowTotalValue } from '../store';

class TableContainer extends React.Component {
  render() {
    const {
      columns,
      rows,
      changeColumnTitle,
      changeRowValue,
      changeRowTotalValue
    } = this.props
    return (
      <TableComponent
        columns={columns}
        rows={rows}
        changeColumnTitle={changeColumnTitle}
        changeRowValue={changeRowValue}
        changeRowTotalValue={changeRowTotalValue}
      />
    );
  }
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
