import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

/*export*/ function RowContent(props) {
  const {
    columns,
    rows,
    index: iRow,
    changeRowValue
  } = props;

  return (
    <tr>
      <td>{iRow + 1}</td>
      {columns.map((column, iCol) => {
        const propKey = `column${iCol + 1}_${iRow + 1}`
        const value = rows[propKey] || ''
        return (
          <td key={`column${iCol}`}>
            {column.type === 'select' ? (
              <Form.Control
                as='select'
                defaultValue={value}
                onChange={(e) => changeRowValue(propKey, e.target.value)}
                isInvalid={column.isRequired && !value}
                required={column.isRequired}
              >
                <option></option>
                {column.options.map(o=> (
                  <option
                    key={o}
                  >
                    {o}
                  </option>
                ))}
              </Form.Control>
            ) : (
              <Form.Control
                as='input'
                type={column.type}
                value={value}
                onChange={(e) => this.rowOnChange(propKey, e.target.value)}
                isInvalid={column.isRequired && !value}
                required={column.isRequired}
              />
            )}

          </td>
      )})}
    </tr>
  );
}

RowContent.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.object,
  index: PropTypes.number,
  changeRowValue:  PropTypes.func,
}
