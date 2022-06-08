import React,{useState} from "react";


const Header = () => {
  const [show,setShow]=useState(true)
  return (
    <div>
      <nav class="nav">
        <div>
          <h1>LOL FORUM</h1>
          <li>
            <ul>
              <a href="http://google.com">Accueil</a>
            </ul>
            <ul>
              <a href="http://google.com">Forum</a>
            </ul>
            <ul>
              <a href="http://google.com">Guides</a>
            </ul>
            <ul>
              <a href="http://google.com">Actualités</a>
            </ul>
          </li>
        </div>
        <div class="nav__user">
            <input type="text" placeholder="Search..."></input>
            <button onClick={()=>setShow(true)}>S'inscrire</button>
            <button>Se connecter</button>
        </div>
        {
          show?<div class="nav__popup">
            <button onClick={()=>setShow(false)} class="nav__popup--end">X</button>
          </div>:null
        }
      </nav>
    </div>
  );
};

export default Header;
