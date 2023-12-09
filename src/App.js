import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route exact path="/team-match/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
