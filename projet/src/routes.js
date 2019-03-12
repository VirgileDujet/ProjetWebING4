import React  from 'react';
import {Route,Switch} from 'react-router-dom';
import PageDashContainer from './Container/PageDashContainer';
import PageDash from './Container/PageDash';
import Formulaire from './components/Formulaire';





const routes = () => {
return (
    <Switch>
    <Route path="/" exact component={PageDash}/>
    <Route path="/admin" exact component={Formulaire}/>
    </Switch>
);


};
export default routes;
