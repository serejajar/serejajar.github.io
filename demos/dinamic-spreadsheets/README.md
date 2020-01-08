### About
The dynamic spreadsheet app should allow you to edit cells, add new columns with types, add more rows, and validate cells.

When the user opens the page, there should no spreadsheet showing. First, the user must create a column. When creating that column, the user should specify the column type and a column title. That column title should be shown on the header row of the spreadsheet. You should also be able to specify if a column is required or not.

##### Column types:
- Date
- Select (dropdown)
    - When creating the column, the user must be given the option to specify which items are available in the dropdown
- Text
- Number

Each of these fields has a validation to ensure that the user entered the correct data type. For example, if a user enters “Hello World” in a numeric field, it should fail validation. Also, recall that if the user sets a column to “required,” then it should validate that there is data in that field. This validation happens after leaving the cell, and it should highlight the cell in red.

The first column is created with 10 empty rows. To add additional rows, a user can be able to click a button “Add 10 rows” below the spreadsheet and 10 empty rows will be created. User can edit the column titles.

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm i
$ npm start
```

The App.js is entry point.

### Structure
The app is divided into two features:

Form - for creating a column
  The ColumnFormPopup.js contains the Button which opens the Popup.
  As a Popup child, I use ColumnFormContainer which uses Redux for adding the data from the Form feature

Table - for show a spreadsheet data
  TableContainer uses Redux for getting data in rows and send it to the view (TableComponent) and the RowContent uses to create rows

the App.js collects all.

##### Data store:
```js

columns = [{
  isRequired: false,
  title: 'a title',
  options: ['1', '2'], // only for type select
  type: 'number',
}]

rows = {
  data: {
    colum1_1: 'value'
    colum2_3: 'value'
    colum2_8: 'value'
  }
  total: 10
}
```
The row content is stored in the object instead an array (see example below), to decrease total operations for filling and searching a row value. Limitation for the array:
- it's nested
- store all row values, even if it empty
- search thought all nested arrays to find what you need

```js
rows = [
  ['1', '2', '3', '4'],
  ['1', '', '', '']
]
```


### Main libs used in the app:
- ReactJS
- Redux
- React-Bootstrap
