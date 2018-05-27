import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TargetListPage from './pages/target-list-page';
import TargetFormPage from './pages/target-form-page';

class App extends Component {
    render() {
      return (
          <Container>
            <div className="ui two item menu">
              <NavLink className="item" activeClassName="active" exact to="/">
                  Target Companies List
              </NavLink>

              <NavLink className="item" activeClassName="active" exact to="/contacts/new">
                  Add Target Company
              </NavLink>
            </div>

            <Route exact path="/" component={TargetListPage}/>
            <Route path="/targets/new" component={TargetFormPage}/>
            <Route path="/targets/edit/:_id" component={TargetFormPage}/>
          </Container>
        );
    }
}


export default App;
