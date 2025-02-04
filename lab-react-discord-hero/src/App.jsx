import './App.css'
import logo from "./assets/images/discord-logo-white.png"
import menu from "./assets/images/menu-icon.png"
import background from "./assets/images/discord-background.png"

function App() {
  return (
    <>
      <nav id='navBar'>
        <img id='logo' src={logo} alt="logo" />
        <img id='menu' src={menu} alt="menu" />
      </nav>
      <main>
        <section id='text'>
           <h1 id='title'>IMAGINE A PLACE...</h1>
        <br />
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community.
           Where just you and a handful of friends can spend time together.
            A place that makes it easy to talk every day and hang out more often.
        </p>
        </section>
        <div id='container'>
          <section id='interactive'>
          <button id='whiteButton'>Download for Mac</button>
          <br />
          <button id='blackButton'>Open Discord in your browser</button>
          </section>
          <div id='background'>
            <img id='backgroundImage' src={background} alt="background" />
          </div> 
        </div>
      </main>
    </>
  )
  
}

export default App
