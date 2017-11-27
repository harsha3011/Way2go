import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import logo from "../../../Images/way2go.jpeg";
class Footer extends React.Component{
    render(){
      const styles = {
        mainStyles:{
            height:50,
            background:'White ',
            position: 'fixed',
            bottom:0, left: 0, right: 0,
            fontFamily: 'arial',
            borderTopStyle: "outset",
            borderTopColor: "grey",
        }
    };
        return (
            <footer style={styles.mainStyles}>
            <div style={{marginLeft:'60%',  display:'flex'}}>
            <div style={{width:"25%",height:"90%",marginTop:'1%',}}>
              <img width="100%" height="100%" src = {logo} alt ="" />
            </div>
            <div style={{width:"65%",height:"30%",marginTop:'3%',marginLeft:"2%"}}>
              <p>Copyrights @ 2017 Wipro Limited</p>
            </div>
            </div>
           </footer>
        );
    }
}

export default muiThemeable()(Footer);
