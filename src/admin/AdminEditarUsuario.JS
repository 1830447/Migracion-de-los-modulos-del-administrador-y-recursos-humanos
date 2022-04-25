import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import UP_Victoria_200 from "./img/UP_Victoria_200.png";
import React from "react";
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
    <div class="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-3.jpg">
      <div class="logo">
          <img src="../img/UP_Victoria_200.png" alt='' class="mx-auto d-block img-fluid"/>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active  ">
            <a class="nav-link" href="dashborad.html">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Recursos académicos
                <i class="material-icons">backup_table</i>
            </a>

            <div class="collapse" id="collapseExample">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="aulas_talleres.html">
                            <i class="material-icons text-info">holiday_village</i>
                            <p>Aulas y Talleres</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="material-icons text-info">people</i>
                            <p>Profesores</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <i class="material-icons text-info">account_tree</i>
                            <p>Planes de Estudio</p>
                        </a>
                    </li>
                </ul>
            </div>
            
            </li>
          <li class="nav-item ">
            <a class="nav-link" href="perfil.html">
              <i class="material-icons">person</i>
              <p>Perfil</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="historial_contratos.html">
              <i class="material-icons">cast_for_education</i>
              <p>Carrgas académicas</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
     
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="">Home / Detalles Usuario</a>
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
            <div class="col-lg-12 col-md-10">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Datos de Usuarios</h4>
                </div> 
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td>spolanco@upv.edu.mx</td>                       
                      </tr>
                      <tr>
                        <td>Tipo</td>
                        <td>
                          <Form.Select name="Tipo">
                            <option>Profesor</option>
                            <option>Director</option>
                          </Form.Select>
                        </td>
                      </tr>
                      <tr>
                        <td>Activo</td>
                        <td>
                          <label class="switch">
                            
                            <Form.Control type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div> 
                <div class="card-footer">
                  <Button type="button" class="btn btn-primary ml-auto" data-toggle="modal" data-target="#AgregarUsuario">Reestablecer <br/> contraseña </Button>
                </div>
              </div>
            </div> 
          </div> 
        </div> 

        <div class="container-fluid">

            <div class="row">
              <div class="col-lg-10 col-md-10">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Datos de Perfil</h4>
                  </div> 
                  <div class="card-body table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>
                            Nombre
                            <Form.Control type="text" id="nombre" name="nombre"/>
                            Apellidos:
                            <Form.Control type="text" id="apellidos" name="apellidos"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Teléfono
                            <Form.Control type="number" id="teléfono" name="teléfono"/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Extensión
                            <Form.Control type="number" id="extensión" name="extensión"/>
                          </td>
                        </tr>
                        <tr >
                            <td colspan="2">
                                <span class="material-icons" >
                                    account_circle
                                </span> <br/>
                                <Form.Control type="file" id="imagen" name="imagen"/>
                            </td>
                        </tr>
                      </tbody>
                    </table>
  
                  </div> 
                </div> 
              </div> 
            </div> 
          </div> 

          <div class="container-fluid">

            <div class="row">
              <div class="col-lg-12 col-md-10">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Profesor / Perfil de Profesor</h4>
                  </div> 
                  <div class="card-body table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <td>Nivel de Adscripción</td>
                          <td>
                            <Form.Select name="Nivel de adscripción">
                              <option>Lic.</option>
                              <option>Dr.</option>
                            </Form.Select>
                          </td>                       
                        </tr>
                        <tr>
                          <td>Tipo Contrato</td>
                          <td>
                            <Form.Select name="Tipo Contrato">
                              <option>P.A.</option>
                              <option>P.T.C.</option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Categoría</td>
                          <td>
                            <Form.Select name="Tipo Contrato">
                              <option>A</option>
                              <option>B</option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                            <td>Inicio de contrato</td>
                            <td>
                              <input type="date" id="InicioContrato" name="InicioContrato"/>
                            </td>                       
                          </tr>
                          <tr>
                            <td>Fin de Contrato</td>
                            <td>
                              <input type="date" id="finContrato" name="finContrato"/>
                            </td>
                          </tr>
                          <tr>
                            <td>Carrera</td>
                            <td>
                              <Form.Select name="Tipo Contrato">
                                <option>ITI</option>
                                <option>IM</option>
                              </Form.Select>
                            </td>
                          </tr>
                      </tbody>
                    </table>
  
                  </div> 
                  <div class="card-footer">
                                <div class="row">
                                    <div class="col-md">
                                        <button class="btn btn-primary" id="btnEditarPerfilProfesor">
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </div>
                </div> 
              </div> 
            </div> 
          </div> 
  
          <div class="container-fluid">
  
              <div class="row">
                <div class="col-lg-10 col-md-10">
                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title">Profesor / Carreras donde imparte Materias</h4>
                    </div>
                    <div class="card-body table-responsive">
                      <table class="table table-hover">
                        <tbody>
                          <tr>
                            <td>
                              <input type="checkbox" id="cbox2" value="ITI"></input><label for="cbox2">Ingeniería en Tecnologías de la Información</label>
                            </td>
                          </tr>
                        <tr>
                            <td>
                              <input type="checkbox" id="cbox2" value="IM"/><label for="cbox2">Ingeniería en Mecatrónica</label>
                            </td>
                        </tr>
                        </tbody>
                      </table>
    
                    </div> 
                  </div> 
                </div> 
              </div> 
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
 
  <script src="../assets/js/core/jquery.min.js"></script>
  <script src="../assets/js/core/popper.min.js"></script>
  <script src="../assets/js/core/bootstrap-material-design.min.js"></script>
  <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  
  <script src="../assets/js/plugins/moment.min.js"></script>
 
  <script src="../assets/js/plugins/sweetalert2.js"></script>

  <script src="../assets/js/plugins/jquery.validate.min.js"></script>
 
  <script src="../assets/js/plugins/jquery.bootstrap-wizard.js"></script>

  <script src="../assets/js/plugins/bootstrap-selectpicker.js"></script>
 
  <script src="../assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
 
  <script src="../assets/js/plugins/jquery.dataTables.min.js"></script>
  
  <script src="../assets/js/plugins/bootstrap-tagsinput.js"></script>
  
  <script src="../assets/js/plugins/jasny-bootstrap.min.js"></script>
  
  <script src="../assets/js/plugins/fullcalendar.min.js"></script>
  
  <script src="../assets/js/plugins/jquery-jvectormap.js"></script>
 
  <script src="../assets/js/plugins/nouislider.min.js"></script>
 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
  
  <script src="../assets/js/plugins/arrive.min.js"></script>
 
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
 
  <script src="../assets/js/plugins/chartist.min.js"></script>
 
  <script src="../assets/js/plugins/bootstrap-notify.js"></script>

  <script src="../assets/js/material-dashboard.js?v=2.1.2" type="text/javascript"></script>
 
  <script src="../assets/demo/demo.js"></script>
  
</body>
      </>
      
    );
  
    }
  }
  
  
  export default App;
