import { Switch, Route } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Homepage } from './components/Homepage'
import { Carbon } from './components/Carbon'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/register' component={Signup} />
    <Route exact path='/carbon' component={Carbon} />
  </Switch>
)