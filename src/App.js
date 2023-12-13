import './App.css'
import NavbarComponent from './NavbarComponent.jsx'
import Home from './Home.jsx'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <header className="header">
        <NavbarComponent />
      </header>

      <Home />

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
