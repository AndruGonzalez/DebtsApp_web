import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/'
import Cards from './containers/Cards/'
import CardsForm from './containers/Cards/Forms'
import Debts from './containers/Debts/'
import DebtsForm from './containers/Debts/Forms'
import Signup from './containers/Signup'
import Login from './containers/Login'
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Cards' component={Cards} />
      <Route exact path='/cards/new' component={CardsForm} />
      <Route exact path='/cards/:id' component={CardsForm} />
      <Route exact path='/debts' component={Debts} />
      <Route exact path='/debts/new' component={DebtsForm} />
      <Route exact path='/debts/:id' component={DebtsForm} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </Router>
)

export default App;
