// import React from 'react';
// import PropTypes from 'prop-types'
// import { Table, Form, Button } from 'react-bootstrap';
// import { RowContent } from './';

const { Table } = ReactBootstrap;

/* export */ class TableComponent extends React.Component {
  render() {
    const {
      columns = [],
      rows = {
        data: {},
        total: 10
      },
      changeColumnTitle,
      changeRowValue,
      changeRowTotalValue,
    } = this.props
    const totalRow = new Array(rows.total).fill('')

    if (!columns.length) {
      return null
    }
    return (
      <div>
        <Table className="w-auto" size="sm">
          <thead>
            <tr>
              <th>#</th>
              {columns.map((column, i) => (
                <th key={`column_${i}`}>
                  <Form.Control
                    onChange={(e) => changeColumnTitle(i, e.target.value)}
                    value={column.title}
                    placeholder='Column title'
                    required
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {totalRow.map((r, i) => (
              <RowContent
                key={`row_${i}`}
                columns={columns}
                rows={rows.data}
                index={i}
                changeRowValue={changeRowValue}
              />
            ))}
          </tbody>
        </Table>
        <Button
          variant="success"
          onClick={() => changeRowTotalValue(rows.total + 10)}
        >
          Add 10 rows
        </Button>
      </div>
    );
  }
}

TableComponent.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.object,
  changeColumnTitle: PropTypes.func,
  changeRowValue: PropTypes.func,
  changeRowTotalValue: PropTypes.func
};
