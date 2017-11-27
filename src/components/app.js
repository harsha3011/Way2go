import React, { PropTypes } from 'react';
import Main from './main';
import fr from 'react-intl/locale-data/fr';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import { IntlProvider, addLocaleData } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {ThemePalettes, Storage} from 'way2go-common';
import {Main as AuthenticationMain} from 'way2go-authentication';
import Home from './Home/HomePage.js';
import Header from './Header/Header.js';
import ListUsers from './ListUsers/ListUsers.js';
import Footer from './Footer/Footer.js';
import AddorEditRole from './AddorEditRole/AddorEditRole.js';
const locale = Storage().getValue(Storage().options.LOCALE);
addLocaleData([...fr]);



class App extends React.Component {
    render() {
        const theme = getMuiTheme(ThemePalettes(Storage().getValue(Storage().options.THEME).primary));
        return (
            <MuiThemeProvider muiTheme={theme}>
            <Container>
                    <Header />
                    <IntlProvider locale={locale}>
                        <div>
                            <Main />
                            <AuthenticationMain />
                        </div>
                    </IntlProvider>
                    <Footer />
            </Container>
            </MuiThemeProvider>
        );
    }
}

export default App;
