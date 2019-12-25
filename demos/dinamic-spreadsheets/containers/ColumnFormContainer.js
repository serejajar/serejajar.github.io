class ColumnFormContainer extends React.Component {
  render() {
    const { addColumn, closePopup } = this.props
    return (
      <ColumnForm
        addColumn={addColumn}
        closePopup={closePopup}
      />
    );
  }
}

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
