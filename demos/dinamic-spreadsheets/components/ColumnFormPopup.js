// import React, { useState } from 'react';
// import Popup from "reactjs-popup";
// import { Button } from 'react-bootstrap';
// import { ColumnFormContainer } from '../containers';

const Popup = reactjsPopup;

/*export*/ function ColumnFormPopup() {
  const [isPopupOpen, openClosePopup] = useState(false);

  return (
    <div>
      <Button variant="success" onClick={() => openClosePopup(true)}>Add column</Button>
      <Popup
        open={isPopupOpen}
        closeOnDocumentClick
        onClose={() => openClosePopup(false)}
      >
        <ColumnFormContainer closePopup={() => openClosePopup(false)} />
      </Popup>
    </div>
  );
}
