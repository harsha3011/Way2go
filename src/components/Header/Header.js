import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Appbar from 'muicss/lib/react/appbar';
import logo from "../../../Images/logo.png";
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionHome from 'material-ui/svg-icons/action/home';
import ViewModule from 'material-ui/svg-icons/navigation/apps';
import Avatar from 'material-ui/Avatar';
import ImageAvatar from "../../../Images/avatar.jpg"
class Header extends React.Component{
    render(){
        return (

          <Appbar style={{backgroundColor:"White"}}>
          <table width="100%">
       <tbody>
         <tr style={{verticalAlign: 'middle'}}>
           <td className="mui--appbar-height"><img src={logo} alt=" " style={{width:40,height:40}} /></td>
           <td className="mui--appbar-height" style={{textAlign: 'right'}}>
            <div>
               <ActionHome />
               <ViewModule />
               <Badge
                 badgeContent={6}
                 badgeStyle={{backgroundColor:'red',color:'White'}}
               >
                 <NotificationsIcon />
               </Badge>
               <Avatar src={ImageAvatar} />
             </div>
           </td>
         </tr>
       </tbody>
     </table>
          </Appbar>
        );
    }
}

export default muiThemeable()(Header);
