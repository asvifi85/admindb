import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Table, Column, Cell} from 'fixed-data-table';

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

export default class TablePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ],
    };
  }
	handleSelect () {
		console.log(this);
		//selectedIndex={2}
		
	}
  render() {
    return (
	<Tabs
        onSelect={this.handleSelect}
        
      >
	   <TabList>

          {/*
            <Tab/> is the actual tab component that users will interact with.

            Selecting a tab can be done by either clicking with the mouse,
            or by using the keyboard tab to give focus then navigating with
            the arrow keys (right/down to select tab to the right of selected,
            left/up to select tab to the left of selected).

            The content of the <Tab/> (this.props.children) will be shown as the label.
          */}

          <Tab>Routing</Tab>
          <Tab>Opticole</Tab>
          <Tab>Access</Tab>
        </TabList>
		<TabPanel>
          <h2>Routing</h2>
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="name"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="email"
            />
          }
          width={200}
        />
      </Table>
	    </TabPanel>
        <TabPanel>
		  <h2>Opticole</h2>
		</TabPanel>
		<TabPanel>
		  <h2>Access</h2>
		</TabPanel>
		 </Tabs>
    );
  }
}