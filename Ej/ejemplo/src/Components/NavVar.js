import React from 'react'


class NavVar extends React.Component {
    render(){
      return(
        <form action="Busqueda" method="POST">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="/Principal">Navbar</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                              <a class="nav-link" href="/Principal">Inicio</a>
                          </li>                        
                      </ul>
                  </div>       
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="/principalAdmin" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Crear
                              </a>
                              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="/createCountry">Pais</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="/createQuestion">Pregunta</a>
                              </div>
                          </li>   
                      </ul>
                  </div>   
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="/principalAdmin" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Ver
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="/seeCountries">Pais</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="/seeQuestions">Pregunta</a>
                          </div>
                      </li>          
                      </ul>
                  </div>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="/principalAdmin" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Actualizar/Eliminar
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="/updateCountry">Pais</a>
                                  <a class="dropdown-item" href="/updateQuestion">Pregunta</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="/updateInvento">Invento</a>
                          </div>
                      </li>          
                      </ul>
                  </div>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="/reportes">Reportes</a>
                          </li>           
                      </ul>
                  </div>
              </nav>
        </form>
      )
    }
  }
  
  export default NavVar