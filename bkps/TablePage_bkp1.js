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
     getInitialState: function() {
        return {data: this.props.data,
                sort: true
               };
    },
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
  this.state.sort = !this.state.sort;
  var that = this;
  console.log(this.state.sort)
var sortedArr = this.state.data.sort(function(a, b) {
  var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
  var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
  if(that.state.sort){
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
}
  else{
     if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
    
  }

  // names must be equal
  return 0;
});
   this.setState({ data: sortedArr});
console.log(sortedArr);
return sortedArr;
		
},
  componentDidUpdate:function(prevProps, prevState){
    console.log("prev")
    console.log(prevState);
  },
  shouldComponentUpdate: function(){
    
    return true;
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
            data = this.state.data;

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
  return (<div><p>{JSON.stringify(data)}</p> <Table cols={cols} data={data}/> </div>);
	
}
export default TablePage;
