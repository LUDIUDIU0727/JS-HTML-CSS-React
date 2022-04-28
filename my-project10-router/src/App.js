import { Route } from 'react-router-dom';
import Product from './Components/Product';
import Welcome from './Components/Welcome';
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </div>
  );
}

export default App;



// npm install react-router-dom@5


// our.domain.com/ => Component A
// our.domain.com/products => Component B