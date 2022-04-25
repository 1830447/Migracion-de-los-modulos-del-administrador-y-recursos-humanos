
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import UP_Victoria_200 from "./img/UP_Victoria_200.png";
import sidebar from "./img/sidebar-3.jpg";
import React, {useState} from "react";
import {
  Table,
  Button,
  Modal,
  Form,
} from "react-bootstrap";


class App extends React.Component {
  
  render(){
      

  
  return(
    <>
   

<body class="">
  <div class="wrapper ">
    <div class="sidebar" data-color="azure" data-background-color="white" data-image="../../static/assets/img/sidebar-3.jpg">
      
      <div class="logo">
          <img src={UP_Victoria_200} alt='' class="mx-auto d-block img-fluid"/>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="rrhh_dashboard.html">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="historial_contratos.php">
              <i class="material-icons">person</i>
              <p>Historial de contratos</p>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="material-icons">group</i>
              <p>Profesores</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
   
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="">Home / Nuevo Profesor</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search..."/>
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Dashboard
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Mike John responded to your email</a>
                  <a class="dropdown-item" href="#">You have 5 new tasks</a>
                  <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="#">Another Notification</a>
                  <a class="dropdown-item" href="#">Another One</a>
                </div>
              </li> 
              <li class="nav-item dropdown">
                <a class="nav-link" href="" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Cuenta
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <a class="dropdown-item" href="#">Perfil</a>
                  <a class="dropdown-item" href="#">Configuración</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Cerrar Sesión</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Datos de Usuarios</h4>
                </div> 
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td><input type="text" placeholder="spolanco@upv.edu.mx"/></td>                       
                      </tr>
                      <tr>
                        <td>Tipo</td>
                        <td>Profesor</td>                        
                      </tr>
                    </tbody>
                  </table>
                </div> 
              </div> 
            </div> 

            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Datos de Perfil</h4>
                </div> 
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <tbody>
                        <tr>
                          <td>Nombre</td>
                          <td><input type="text" placeholder="Said"/></td> 
                          <td>Apellidos</td>
                          <td><input type="text" placeholder="Polanco Martagón"/></td>                        
                        </tr>
                        <tr>
                          <td>Teléfono</td>
                          <td colspan="3"><input type="text" placeholder="1234567890"/></td>                      
                        </tr>
                        <tr>
                          <td>Extensión</td>
                          <td colspan="3"><input type="text" placeholder="5124"/></td>                      
                        </tr>                        
                    </tbody>
                  </table>
                  <span class="material-icons col-md-11" >account_circle</span>  
                  <input type="file"/>  
                </div> 
              </div>
            </div> 

            <div class="col-md-4">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Profesor / Perfil de Profesor</h4>
                </div>
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td>Nivel de Adscripción</td>
                        <td><input type="text" placeholder="Lic."/></td>                                                   
                      </tr>
                      <tr>
                        <td>Tipo de Contrato</td>
                        <td><input type="text" placeholder="P.A."/></td>
                      </tr>
                      <tr>
                        <td>Categoría</td>
                        <td><input type="text" placeholder="A"/></td>                      
                      </tr>
                      <tr>
                        <td>Inicio de Contrato</td>
                        <td><input type="date" placeholder="text"/></td>                      
                      </tr>  
                      <tr>
                        <td>Fin de Contrato</td>
                        <td><input type="date" placeholder="text"/></td>                      
                      </tr>
                      <tr>
                        <td>Carrera</td>
                        <td><input type="text" placeholder="Ingeniería en Mecatrónica"/></td>
                      </tr>                       
                    </tbody>
                  </table>
    
                </div>
              </div> 
            </div> 

          </div> 
          <div class="botones">
            <button class="btn btn-danger" onClick="history.go(-1);">Cancelar</button>
              <button class="btn btn-primary">Guardar</button>
          </div>
        </div>

      <footer class="footer">
        <div class="container-fluid">
          <nav class="float-left">
            <ul>
              <li>
                <a href="https://creative-tim.com/presentation">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script>, Martagón Systems & Technology
          </div>
        </div>
      </footer>
    </div>
</div>
</div>
  
  
  <script src="../../static/assets/js/core/jquery.min.js"></script>
  <script src="../../static/assets/js/core/popper.min.js"></script>
  <script src="../../static/assets/js/core/bootstrap-material-design.min.js"></script>
  <script src="../../static/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  
  <script src="../../static/assets/js/plugins/moment.min.js"></script>
  
  <script src="../../static/assets/js/plugins/sweetalert2.js"></script>
 
  <script src="../../static/assets/js/plugins/jquery.validate.min.js"></script>
  
  <script src="../../static/assets/js/plugins/jquery.bootstrap-wizard.js"></script>
  
  <script src="../../static/assets/js/plugins/bootstrap-selectpicker.js"></script>
  
  <script src="../../static/assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
 
  <script src="../../static/assets/js/plugins/jquery.dataTables.min.js"></script>

  <script src="../../static/assets/js/plugins/bootstrap-tagsinput.js"></script>
 
  <script src="../../static/assets/js/plugins/jasny-bootstrap.min.js"></script>

  <script src="../../static/assets/js/plugins/fullcalendar.min.js"></script>

  <script src="../../static/assets/js/plugins/jquery-jvectormap.js"></script>

  <script src="../../static/assets/js/plugins/nouislider.min.js"></script>
 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
 
  <script src="../../static/assets/js/plugins/arrive.min.js"></script>
 
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

  <script src="../../static/assets/js/plugins/chartist.min.js"></script>

  <script src="../../static/assets/js/plugins/bootstrap-notify.js"></script>

  <script src="../../static/assets/js/material-dashboard.js?v=2.1.2" type="text/javascript"></script>
 
  <script src="../../static/assets/demo/demo.js"></script>
  
</body>

    </>
    
  );

  }
}



export default App;
