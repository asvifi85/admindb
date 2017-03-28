import React from 'react';
let cols = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' }
];

let data = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Clark', lastName: 'Kent' },
	{ id: 3, firstName: 'Vinay', lastName: 'Kimi' },
	{ id: 4, firstName: 'Hari', lastName: 'Bimi' },
	{ id: 5, firstName: 'Anadnd', lastName: 'cimi' }
];

let Table = React.createClass({

    render: function() {
        let headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table>
                <thead> {headerComponents} </thead>
                <tbody> {rowComponents} </tbody>
            </table>
        );
    },
updateSort: function(){
var sortedArr = this.props.data.sort(function(a, b) {
  var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
  var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(sortedArr);
return sortedArr;
		
},
    generateHeaders: function() {
        let cols = this.props.cols;  // [{key, label}]
		let that = this;
        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key} onClick = {that.updateSort}>{colData.label} </th>;
        });
    },

    generateRows: function() {
        let cols = this.props.cols,  // [{key, label}]
            data = this.props.data;

        return data.map(function(item) {
            // handle the column data within each row
            let cells = cols.map(function(colData) {

                // colData.key might be "firstName"
                return <td> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
    }
});

//React.render(<Table cols={cols} data={data}/>, document.getElementById('example'));

const TablePage = () => {
	return (<Table cols={cols} data={data}/>);
	
}
export default TablePage;