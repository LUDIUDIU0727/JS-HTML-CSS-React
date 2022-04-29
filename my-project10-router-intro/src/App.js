import { Route, Switch, Redirect } from 'react-router-dom';
import Product from './Pages/Product';
import Welcome from './Pages/Welcome';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>

  );
}

export default App;



// npm install react-router-dom@5


// our.domain.com/ => Component A
// our.domain.com/products => Component B
// our.domain.com/product-detail/<any value>