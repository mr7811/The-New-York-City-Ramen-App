import React from "react"
import {BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from'./pages/Home'
import NotFound from './pages/NotFound'
import RamenList from './pages/RamenList'
import Reccomendations from './pages/Reccomendations'

const App = () => (
  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route path ='/' component={Home} />
    <Route path = '/ramenlist' component={RamenList} />
    <Route path ='/reccomendations' component={Reccomendations} />
    <Route component={NotFound} />
  </Switch>
<Footer />
  </BrowserRouter>
)

export default App