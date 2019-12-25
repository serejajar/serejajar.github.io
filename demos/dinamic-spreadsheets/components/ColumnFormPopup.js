const Popup = reactjsPopup;

class ColumnFormPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPopupOpen: false };
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }
  openPopup() {
    this.setState({ isPopupOpen: true });
  }
  closePopup() {
    this.setState({ isPopupOpen: false });
  }

  render() {
    const { isPopupOpen } = this.state;

    return (
      <div>
        <Button variant="success" onClick={this.openPopup}>Add column</Button>
        <Popup
          open={isPopupOpen}
          closeOnDocumentClick
          onClose={this.closePopup}
        >
          <ColumnFormContainer
            closePopup={this.closePopup}
          />
        </Popup>
      </div>
    );
  }
}
