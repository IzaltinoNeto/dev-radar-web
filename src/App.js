import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import "./SideBar.css";
import "./Main.css";

function App() {
  
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />

          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude" 
                id="longitude" 
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/33531058?s=400&u=9127c413236e925c69876ba793cbdea0494ab451&v=4"
                alt="IzaltinoNeto"
              ></img>
              <div className="user-info">
                <strong>Izaltino</strong>
                <span>ReacttJS, Angular, Spring Boot, Node.js</span>
              </div>
            </header>

            <p>i'm a developer.</p>
            <a href="https://github.com/IzaltinoNeto">
              {" "}
              Acessar Perfil no GutHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/33531058?s=400&u=9127c413236e925c69876ba793cbdea0494ab451&v=4"
                alt="IzaltinoNeto"
              ></img>
              <div className="user-info">
                <strong>Izaltino</strong>
                <span>ReacttJS, Angular, Spring Boot, Node.js</span>
              </div>
            </header>

            <p>i'm a developer.</p>
            <a href="https://github.com/IzaltinoNeto">
              {" "}
              Acessar Perfil no GutHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/33531058?s=400&u=9127c413236e925c69876ba793cbdea0494ab451&v=4"
                alt="IzaltinoNeto"
              ></img>
              <div className="user-info">
                <strong>Izaltino</strong>
                <span>ReacttJS, Angular, Spring Boot, Node.js</span>
              </div>
            </header>

            <p>i'm a developer.</p>
            <a href="https://github.com/IzaltinoNeto">
              {" "}
              Acessar Perfil no GutHub
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/33531058?s=400&u=9127c413236e925c69876ba793cbdea0494ab451&v=4"
                alt="IzaltinoNeto"
              ></img>
              <div className="user-info">
                <strong>Izaltino</strong>
                <span>ReacttJS, Angular, Spring Boot, Node.js</span>
              </div>
            </header>

            <p>i'm a developer.</p>
            <a href="https://github.com/IzaltinoNeto">
              {" "}
              Acessar Perfil no GutHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
