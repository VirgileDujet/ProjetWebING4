import React  from 'react';
import {Route,Switch} from 'react-router-dom';
import PageDashContainer from './Container/PageDashContainer';
import PageDash from './Container/PageDash';
import Formulaire from './components/Formulaire';
import Formulairepost from './components/Formulairepost';
import Formulairedelete from './components/Formulairedelete';





const routes = () => {
return (
    <Switch>
    <Route path="/" exact component={PageDash}/>
    <Route path="/adminput" exact component={Formulaire}/>
    <Route path="/adminpost" exact component={Formulairepost}/>
    <Route path="/admindelete" exact component={Formulairedelete}/>
    </Switch>
);


};
export default routes;
