import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Home />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
