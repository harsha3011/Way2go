import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Filter from 'material-ui/svg-icons/navigation/arrow-drop-down';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ViewList from 'material-ui/svg-icons/action/view-list';
import ShowMore from 'material-ui/svg-icons/content/add';
import ShowLess from 'material-ui/svg-icons/content/remove';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import {List, ListItem} from 'material-ui/List';
import Pagination from 'materialui-pagination';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
class HomePage extends React.Component{
  constructor(props, context) {
      super(props,context);
     this.state = {
       selectedType:null,rowsPerPage: [5,10],
            rows: [],
            numberOfRows: 5,
            page: 1,
            total: undefined

     }
     this.updateRows = this.updateRows.bind(this);
    }
    componentWillMount(){
      var rowData=[];
      rowData=[{sl:1,name:"John Smith",id:567889,email:"ghhhhh"},{sl:2,name:"John Smith",id:567889,email:"ghhhhh"},{sl:3,name:"John Smith",id:567889,email:"ghhhhh"},{sl:4,name:"John Smith",id:567889,email:"ghhhhh"},{sl:5,name:"John Smith",id:567889,email:"ghhhhh"},{sl:6,name:"John Smith",id:567889,email:"ghhhhh"},{sl:7,name:"John Smith",id:567889,email:"ghhhhh"},{sl:8,name:"John Smith",id:567889,email:"ghhhhh"},{sl:9,name:"John Smith",id:567889,email:"ghhhhh"},{sl:10,name:"John Smith",id:567889,email:"ghhhhh"}]
      let searchRange = rowData.length
      console.log("searchRange",searchRange);
      this.setState({rows:rowData,total:searchRange,numberOfRows:5,page:this.state.page});
    }
    updateRows(state){
        this.setState({rows:state,total:15,numberOfRows:5,page:this.state.page});
      }
    getType(event,index,value){
      this.setState({selectedType:value})
    }
    editUser(){
      console.log("editUser");
    }
    render(){

      console.log();
        return (<div>
          <List><ListItem leftIcon={<ViewList/>}
    primaryText="Client Admin" /></List>
    <Row>
      <Col md="10" md-offset="1">
          <Card>
            <CardHeader>
              <Toolbar style={{backgroundColor:'White',alignItems:'flex-end',justifyContent:'space-between'}}>
                <ToolbarGroup firstChild={true}>
                  <h4 >List of Users</h4>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
                  <SelectField underlineStyle={{borderColor:'black'}} floatingLabelText="Select Type" style={{width:"50%"}} value={this.state.selectedType} onChange={this.getType.bind(this)}>
                    <MenuItem value={null} key={0} primaryText={null} />
                    <MenuItem value={1} key={1} primaryText="Name" />
                    <MenuItem value={2} key={2} primaryText="Assigned Role" />
                    <MenuItem value={3} key={3} primaryText="Emp ID" />
                    <MenuItem value={4} key={4} primaryText="Email ID" />
                  </SelectField>
                  <TextField style={{width:"50%",marginLeft:10}} underlineStyle={{borderColor:'black'}}
                    floatingLabelText=" "/><Search />
                </ToolbarGroup>
              </Toolbar>
            </CardHeader>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor:'#CE93D8'}}>
                <TableRow>
                  <TableHeaderColumn></TableHeaderColumn>
                  <TableHeaderColumn>Name<IconButton ><Filter /></IconButton></TableHeaderColumn>
                  <TableHeaderColumn>Assigned Role<IconButton ><Filter /></IconButton></TableHeaderColumn>
                  <TableHeaderColumn>Email ID</TableHeaderColumn>
                  <TableHeaderColumn>Employee ID</TableHeaderColumn>
                  <TableHeaderColumn>    </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
              {this.state.rows.map((row, index) => {
                      return (
                <TableRow key={index}>
                  <TableRowColumn>{row.sl}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.email}</TableRowColumn>
                  <TableRowColumn><Link  to="/newproject/EditUser/{$(index)}" ><IconButton><Edit /></IconButton></Link></TableRowColumn>
                </TableRow>
              )})}
              </TableBody>
            </Table>
            <Divider />
            <Pagination
                  total={this.state.total}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  numberOfRows={this.state.numberOfRows}
                  updateRows={this.updateRows}
                />
            </Card>
            </Col>
            </Row>
            </div>
        );
    }
}

export default muiThemeable()(HomePage);
