import { Switch, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Homepage } from './components/Homepage'
import { Carbon } from './components/Carbon'
import Dashboard from './components/Dash/Dashboard'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/register' component={Signup} />
    <Route path='/carbon' component={Carbon} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)