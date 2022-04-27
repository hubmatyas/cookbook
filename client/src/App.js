import logo from './res/logo.svg';
import timeIcon from './res/icons/timeIcon.svg'
import placeholder from './res/placeholder.jpg'
import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
  <div className="content">
      <div className="container">
      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="logo"/>
        </a>
        <ul className="navLinks">
          <li>
            <a href="/">Přidat recept</a>
          </li><li>
            <a href="/">Moje recepty</a>
          </li><li>
            <a href="/">Odhlásit se</a>
          </li>
          
        </ul>
    </nav>

    <header>
      <div className="headerBox">
        <h1 className="title">Přispějte do naší databáze<br />řeckých receptů!</h1>
        <a href="/" className="btn">Přidat recept</a>
      </div>
    </header>

    <section className="itemsSection">
      <h2 className="sectionTitle">Všechny recepty</h2>
      <div className="listItems">
        <ul>
        <li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li><li>
            <a href="/" className="item">
              <figure>
                <img src={placeholder} alt="#" className="thumb" />
              </figure>
              <strong className="name">TZATZIKI - originální řecký recept</strong>
              <div className="meta">
                <div className="time">
                  <img src={timeIcon} alt="#" />
                  <span>20 min</span>
                </div>
                <div className="category">
                  <span>Předkrmy</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className="test-output">

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{ user }</p>
        ))
      )}


    </section>


    </div>
    <footer>
    <p>Aplikace byla vytvořena v&nbsp;rámci předmětu Architektura Cloudových Aplikací</p>
  </footer>

  </div>


  );
}

export default App;
