import { Link } from "react-router-dom"
import './navbar.css';
import {  useEffect, useState } from "react";

export const Navbar = () => {
 
 
  const [, setPathNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const currentPath = window.location.pathname;
    setPathNav(currentPath);
  
  }, [])
 

  useEffect(() => {
    // Configurar la visibilidad inicial
    updateVisibility();

    // Añadir un event listener para cambios en el tamaño de la pantalla
    window.addEventListener("resize", updateVisibility);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const updateVisibility = () => {
    // Oculta el botón si el ancho de la pantalla es menor a 768px
    setIsVisible(window.innerWidth > 600);
  };
  
  
  return (
    <>
      <nav className="navbar">
        <div className="container container-navbar">
          <Link to="/" style={{textDecoration: 'none'}}><p className="logo">Dr Envíos</p></Link>
        {
          isVisible && (
              <ul className="nav-links">
                <li><Link to="/"  
                      style={{
                        fontWeight: location.pathname === "/" ? "bold" : "normal",
                        textDecoration: "none",
                      }}>Artículos</Link></li>
                <li><Link to="/specialPrices"
                      style={{
                        fontWeight: location.pathname === "/specialPrices" ? "bold" : "normal",
                        textDecoration: "none",
                      }}
                      >Subida</Link></li>
            </ul>
          )
        }
        {
        !isVisible &&  (
          <div className={`hamburger-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )
      }
        </div> 
      </nav>
      
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {
          isOpen && (<div style={{cursor: 'pointer'}} onClick={toggleMenu}>
                <p style={{color: 'red', position: 'fixed', top: 10, right: 20, fontSize: '25px'}}>X</p>
              </div>)
        }
        
        <ul>
          <li><Link to="/"  
                      style={{
                        fontWeight: location.pathname === "/" ? "bold" : "normal",
                        textDecoration: "none",
                      }}>Artículos</Link></li>
           <li><Link to="/specialPrices"
                      style={{
                        fontWeight: location.pathname === "/specialPrices" ? "bold" : "normal",
                        textDecoration: "none",
                      }}
                      >Subida</Link></li>
        </ul>
      </div>
    </>
   
  )
}
