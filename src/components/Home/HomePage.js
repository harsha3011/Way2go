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
import {List, ListItem} from 'material-ui/List';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Link } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
class HomePage extends React.Component{
  constructor(props, context) {
      super(props,context);
     this.state = {
            showMore:[],
            rows: [],

     }
   }
     componentWillMount(){
       var rowData=[];
       var showData=[];
       rowData=[{sl:1,name:"John Smith",id:567889,email:"ghhhhh"},{sl:2,name:"John Smith",id:567889,email:"ghhhhh"},{sl:3,name:"John Smith",id:567889,email:"ghhhhh"},{sl:4,name:"John Smith",id:567889,email:"ghhhhh"},{sl:5,name:"John Smith",id:567889,email:"ghhhhh"},{sl:6,name:"John Smith",id:567889,email:"ghhhhh"},{sl:7,name:"John Smith",id:567889,email:"ghhhhh"},{sl:8,name:"John Smith",id:567889,email:"ghhhhh"},{sl:9,name:"John Smith",id:567889,email:"ghhhhh"},{sl:10,name:"John Smith",id:567889,email:"ghhhhh"}]
       let s=rowData.length
       while(s--) showData.push(false);
       this.setState({rows:rowData});
     }
     showMore(index,event){
       var showData=[];
       showData[index]=true;
       this.setState({showMore:showData});
     }
     showLess(index,event){
       var showData=[];
       showData[index]=false;
       this.setState({showMore:showData});
     }
    render(){
        return (
          <div className="jumbotron">
          <List><ListItem leftIcon={<ViewList/>}
    primaryText="Client Admin" /></List>
      <Row>
        <Col md="10" md-offset="1">
              <Card>
              <CardHeader>
              <Toolbar style={{backgroundColor:'White',alignItems:'flex-end',justifyContent:'space-between'}}>
                <ToolbarGroup firstChild={true}>
                <h4>List of Roles</h4>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>
              <Link to="/newproject/ListUsers">
                <RaisedButton backgroundColor="#9E9E9E" label="List of Users"/>
                </Link>

              <Link to="/newproject/manageRole/addRole">
                <RaisedButton > <ContentAdd style={{color:'#9C27B0'}} /> Add Role </RaisedButton>
                </Link>
                </ToolbarGroup>
              </Toolbar>
            </CardHeader>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{backgroundColor:'#CE93D8'}}>
                <TableRow>
                  <TableHeaderColumn>Role<IconButton ><Filter /></IconButton></TableHeaderColumn>
                  <TableHeaderColumn>Role Category<IconButton ><Filter /></IconButton></TableHeaderColumn>
                  <TableHeaderColumn>Reports</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>    </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody  displayRowCheckbox={false} stripedRows={true} stripedRowsStyle={{backgroundColor:'red'}}>
              {

              this.state.rows.map((row, index) => {

                      return (!this.state.showMore[index] ?
                <TableRow key={index}>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn><IconButton onClick={this.showMore.bind(this,index)} iconStyle={{width:12,height:12}} style={{border:"1px dashed black",size:"small",width:15,height:15,padding: 1}}><ShowMore /></IconButton>John Smith</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                  <TableRowColumn><Link to="/newproject/manageRole/editRole"><IconButton ><Edit /></IconButton></Link></TableRowColumn>
                </TableRow>
               :
                <TableRow key={index}>
                  <TableRowColumn>2</TableRowColumn>
                  <TableRowColumn><IconButton onClick={this.showLess.bind(this,index)} iconStyle={{width:12,height:12}} style={{border:"1px dashed black",size:"small",width:15,height:15,padding: 1}}><ShowLess /></IconButton>John Smith</TableRowColumn>
                  <TableRowColumn>4444</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                  <TableRowColumn><Link to="/newproject/manageRole/editRole"><IconButton ><Edit /></IconButton></Link></TableRowColumn>
                </TableRow>
              )}) })}
              </TableBody>
            </Table>
            </Card>
            </Col>
            </Row>
            </div>
        );
    }
}

export default muiThemeable()(HomePage);
