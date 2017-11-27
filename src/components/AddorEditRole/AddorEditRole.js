import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ViewList from 'material-ui/svg-icons/action/view-list';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import {List, ListItem} from 'material-ui/List';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router-dom';
import Roles from './Roles.js';
class AddorEditRole extends React.Component{
  constructor(props) {
  super(props);
 this.state = {
   categorySelected:null,reportSelected:[],disabled:true,optionArr:[null],disable:true,reportArr:[null]
 }
}
componentWillMount(){

}
    cancelCreation(){

    }
    saveCreation(){

    }
    removeValue(event,index){
    const a= this.state.role;
    a.pop();
    this.setState({
      role:a
    })
    }
    addValue(){

    }
    addoptions(e)
 {
  var arr=this.state.optionArr;
  arr.push(' ');
  this.setState({
    optionArr:arr
  })

 }
 removeoptions=(index)=>
 {
  var arr=this.state.optionArr;
  arr.splice(index,1);
var arr1=this.state.reportArr;
arr1.splice(index,1);
  this.setState({
    optionArr:arr,reportArr:arr1
  })
  console.log(arr,arr1);
 }
changeoptions=(index,value)=>
{
  var arr=this.state.optionArr;
  arr[index]=value;
  console.log(arr);
  this.setState({
  optionArr:arr
  })
console.log(arr);
}
changereports=(index,value)=>
{
  var arr=this.state.reportArr;
  arr[index]=value;
  console.log(arr);
  this.setState({
  reportArr:arr
  })
console.log(arr);
}

    render(){
      length = this.state.optionArr.length;
      var options =this.state.optionArr.map((value,index) => {
     return (
     <Roles addoptions={this.addoptions.bind(this)} index={index} value={value} value2={this.state.reportArr[index]} length={length} removeoptions={this.removeoptions.bind(this)} changereports={this.changereports.bind(this)} changeoptions={this.changeoptions.bind(this)}/>

     );
   });
        const x=this.props.match.params.methodName;
        return (
          <div className="jumbotron">
            <List><ListItem leftIcon={<ViewList/>}
      primaryText="Client Admin" /></List>
      <Row>
        <Col md="11" md-offset="1">
            <Card>
            <h4>{x=="editRole" ? "Add/Edit Role" : "Add Role"} </h4>

              <Divider />
              <CardText>
              <Row>
              <Col md="4">
                <TextField
                 floatingLabelText="Role Name"
                />
              </Col>
              <Col md="8">
              {options}
              </Col>
                </Row>
                <Row>
                <Col md="7" md-offset="4">
                <TextField style={{width:"100%"}}
                 floatingLabelText="Description"
                />
                </Col>
                </Row>
              </CardText>
            </Card>

            <br/>
            <Row>
            <Col md="1" md-offset="9">
            <Link to="/newproject">
            <RaisedButton backgroundColor="grey" labelColor="White" fullWidth={true} onClick={this.cancelCreation.bind(this)} label="Back"/>
            </Link>
            </Col>
            <Col md="1" >
            <Link to="/newproject">
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

export default muiThemeable()(AddorEditRole);
