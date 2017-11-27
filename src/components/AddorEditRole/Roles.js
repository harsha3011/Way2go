import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import SelectField from 'material-ui/SelectField';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import ContentAdd from 'material-ui/svg-icons/content/add-circle';
import ContentRemove from 'material-ui/svg-icons/content/remove-circle';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
class Roles extends React.Component{
  constructor() {
  super();
 this.state = {
   categorySelected:null,reportSelected:[],disabled:true,role:[]
 }
}
componentWillMount(){

}
addClicked(e)
 {
   this.props.addoptions(e);
 }
 removeClicked(e)
 {
   this.props.removeoptions(this.props.index);
 }
 changeoptions(e,index,value)
 {
   console.log(e,this.props.index);
 this.props.changeoptions(this.props.index,value);
 }
 selectReport(value,index,event,checked){
   console.log(event,this.props.index)
   console.log(value,index,event,checked);
   const reports = this.state.reportSelected;

  reports.push(index)
  this.setState({
    reportSelected:reports
  })
 this.props.changereports(this.props.index,reports);
 }
render(){
  var a= this.state.reportSelected;

  a.splice(this.props.index,1,this.props.value2)

  console.log(a);
  console.log();
  return(
  <div>
  <Col md="5">
              <SelectField  maxHeight={200} floatingLabelText="Report Category Name" value={this.props.value} onChange={this.changeoptions.bind(this)}>
        <MenuItem value={1} key={1} primaryText="Never" />
        <MenuItem value={2} key={2} primaryText="Every Night" />
        <MenuItem value={3} key={3} primaryText="Weeknights" />
        <MenuItem value={4} key={4} primaryText="Weekends" />
        <MenuItem value={5} key={5} primaryText="Weekly" />
      </SelectField>
      </Col>
      <Col md="5">
    <SelectField style={{width:"100%"}} maxHeight={200} floatingLabelText="Report" multiple={true} value={this.state.reportSelected}>
      <Checkbox value={1} key={1} label="Never" onCheck={this.selectReport.bind(this,"never",1)} />
      <Checkbox value={2} key={2} label="Every Night" onCheck={this.selectReport.bind(this,"Every Night",2)} />
      <Checkbox value={3} key={3} label="Weeknights" onCheck={this.selectReport.bind(this,"Weeknights",3)} />
      <Checkbox value={4} key={4} label="Weekends" onCheck={this.selectReport.bind(this,"Weekends",4)} />
      <Checkbox value={5} key={5} label="Weekly" onCheck={this.selectReport.bind(this,"Weekly",5)}/>
    </SelectField>
    </Col>

              <Col md="1">
              {this.props.index==this.props.length-1 ?

              <FloatingActionButton mini={true}backgroundColor="green" onClick={this.addClicked.bind(this)}>
     <ContentAdd />
   </FloatingActionButton>
:
   <FloatingActionButton mini={true} backgroundColor="red" onClick={this.removeClicked.bind(this)}>
   <ContentRemove />
 </FloatingActionButton>}
  </Col>
            </div>)
}
}
export default muiThemeable()(Roles);
