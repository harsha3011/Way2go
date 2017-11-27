import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ViewList from 'material-ui/svg-icons/action/view-list';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {List, ListItem} from 'material-ui/List';
class EditUser extends React.Component{
  constructor(props) {
  super(props);
 this.state = {
   roleSelected:[],
 }

}
componentWillMount(){
  var rowData=[];
  rowData=[{sl:1,name:"John Smith",id:567889,email:"ghhhhh"},{sl:2,name:"John Smith",id:567889,email:"ghhhhh"},{sl:3,name:"John Smith",id:567889,email:"ghhhhh"},{sl:4,name:"John Smith",id:567889,email:"ghhhhh"},{sl:5,name:"John Smith",id:567889,email:"ghhhhh"},{sl:6,name:"John Smith",id:567889,email:"ghhhhh"},{sl:7,name:"John Smith",id:567889,email:"ghhhhh"},{sl:8,name:"John Smith",id:567889,email:"ghhhhh"},{sl:9,name:"John Smith",id:567889,email:"ghhhhh"},{sl:10,name:"John Smith",id:567889,email:"ghhhhh"}];
  console.log(this.props.match.params.id);
}

    selectRole(value,index,event,checked){
      console.log(checked,index,value);
      const reports = this.state.roleSelected;

      reports.push(index)
      this.setState({
        roleSelected:reports
      })
      console.log("reports",reports);
    }
    removeSelection(checked,index,value){

    }
    cancelCreation(){

    }
    saveCreation(){

    }
    render(){

        return (
          <div>
            <List><ListItem leftIcon={<ViewList/>}
          primaryText="Client Admin" /></List>
          <Row>
      <Col md="11" md-offset="1">
            <Card>
              <h4>Edit User </h4>
              <Divider />
              <CardText>
              <Row>
              <Col md="4">
                <TextField
                 value="sample user"
                 floatingLabelText="User Name"
                />
                </Col>
                <Col md="4">
                <TextField
                 value="sample123"
                 floatingLabelText="Employee ID"
                />
                </Col>
                <Col md="4">
                <SelectField maxHeight={200} floatingLabelText="Select Role" multiple={true} value={this.state.roleSelected}>
                  <Checkbox value={1} key={1} label="Never" onCheck={this.selectRole.bind(this,"never",1)} />
                  <Checkbox value={2} key={2} label="Every Night" onCheck={this.selectRole.bind(this,"Every Night",2)} />
                  <Checkbox value={3} key={3} label="Weeknights" onCheck={this.selectRole.bind(this,"Weeknights",3)} />
                  <Checkbox value={4} key={4} label="Weekends" onCheck={this.selectRole.bind(this,"Weekends",4)} />
                  <Checkbox value={5} key={5} label="Weekly" onCheck={this.selectRole.bind(this,"Weekly",5)}/>
                </SelectField>
                </Col>
                </Row>
                <Row>
                <Col md="4">
                <TextField
                 value="Project Engineer"
                 floatingLabelText="Designation"
                /></Col>
                <Col md="4">
                <TextField
                 value="sample@gmail.com"
                 floatingLabelText="Email ID"
                /></Col></Row>
              </CardText>
            </Card>
            <br/>
            <Row>
            <Col md="1" md-offset="9">
            <Link to="/newproject/ListUsers">
            <RaisedButton backgroundColor="grey" labelColor="White" fullWidth={true} onClick={this.cancelCreation.bind(this)} label="Back"/>
            </Link>
            </Col>
            <Col md="1" >
            <Link to="/newproject/ListUsers">
            <RaisedButton backgroundColor="purple" labelColor="White" fullWidth={true} onClick={this.saveCreation.bind(this)} label="Save"/>
            </Link>
            </Col>
            </Row>

                        </Col>
                        </Row>
          </div>
        );
    }
}

export default muiThemeable()(EditUser);
