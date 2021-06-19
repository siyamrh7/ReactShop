import NavBar from './components/NavBar';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import { Container } from '@material-ui/core'

import Home from './components/Home';
import Detail from './components/Detail';
import Orders from './components/Orders';
import Cart from './components/Cart';
import ProductPost from './components/ProductPost';
import NotFound from './components/NotFound';
import History from './components/History';

function App() {
  return (
    <div className="App">
       
      <Router>
        <NavBar/>
      <Container maxWidth="lg">
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/detail/:id' component={Detail} />
      <Route path='/order' component={Orders}/>
      <Route path='/cart' component={Cart}/>
<Route path="/history" component={History} />
      <Route path='/product/create' component={ProductPost}/>
      <Route component={NotFound}/>
</Switch>
</Container>
      
      </Router>
      
    </div>
  );
}

export default App;
