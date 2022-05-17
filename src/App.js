import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./folder/Home";
import Books from "./folder/Books";
import BookInfo from "./folder/BookInfo";
import { books } from "./data";
import Cart from "./folder/Cart";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      }
      else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    console.log('removeItem', item)
  }

  function numberOfItems(){
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems}></Nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/books" exact render={() => <Books books={books}></Books>}></Route>
        <Route path="/books/:id" exact render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}></BookInfo>} ></Route>
        <Route path="/cart" exact render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}></Cart>}></Route>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
