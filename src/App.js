import './App.css'
import NavbarComponent from './NavbarComponent.jsx'
import Home from './Home.jsx'
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <NavbarComponent />
      </header>

      <Home />
    </div>
  )
}

export default App
