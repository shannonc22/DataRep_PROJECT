import './App.css';
import { Component } from 'react';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { about } from './components/about';
import { addBooks } from './components/addBooks';
import { ToBeRead } from './components/toBeRead';
import { UpdateBook } from './components/updateBook';


// extends component
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* navbar with links to different pages */}
          <Navbar bg="dark" variant="dark">
            {/* book emoji  */}
            <Navbar.Brand href="/"> &#128218;</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/addBooks">Add Books</Nav.Link>
              <Nav.Link href="/toBeRead">To Be Read List</Nav.Link>
            </Nav>
          </Navbar>
          <br></br>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={about} exact />
            <Route path='/addBooks' component={addBooks} exact />
            <Route path='/toBeRead' component={ToBeRead} exact />
            <Route path='/updateBook/:id' component={UpdateBook} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
