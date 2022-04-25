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
  state = {
    
    modalVista: false
  };

  mostrarModalVista = () => {
    this.setState({ modalVista: true });
  };
  cerrarModalvista = () => {
    this.setState({ modalVista: false });
  };
 

  
  render(){
      

  
  return(
    <>
     <body class="">
  <div class="wrapper ">
    <div class="sidebar" data-color="azure" data-background-color="white" data-image="../../static/assets/img/sidebar-3.jpg">
     
      <div class="logo">
          <img src={UP_Victoria_200} alt="" class="mx-auto d-block img-fluid"/>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active  ">
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
          <li class="nav-item">
            <a class="nav-link" href="lista_profesores.php">
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
            <a class="navbar-brand" href="javascript:;">Home / Contrato Por Finalizar</a>
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
                <a class="nav-link" href="javascript:;">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Dashboard
                  </p>
                </a>
              </li>
             
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <div class="col-lg col-md">
                        <div class="card">
                            <div class="card-header card-header-primary">
                                <h4 class="card-title">Contratos por finalizar</h4>
                            </div> 
                            <div class="card-body">
                                <div class="row float-right">
                                    <form class="form-inline">
                                        <div class="col-lg form-group">
                                            <div class="input-group no-border">
                                                <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">search</i>
                        </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Buscar..." size="25"/>
                                            </div>
                                            <div class="col-lg">
                                                <div class="form-group">
                                                    <select class="form-control selectpicker" data-style="btn btn-link" id="sctFiltroContrato"
                                                            multiple data-selected-text-format="count" title="Tipo Contrato">
                                                        <option value="P.A">PTC</option>
                                                        <option value="P.T.C">PA</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="form-group">
                                                    <select class="form-control selectpicker" data-style="btn btn-link" id="sctFiltroCategoria"
                                                            multiple data-selected-text-format="count" title="Categoria">
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                        <option value="D">D</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="form-group">
                                                    <select class="form-control selectpicker" data-style="btn btn-link" id="sctFiltroCarrera"
                                                            multiple data-selected-text-format="count" title="Carrera Adscripción">
                                                        <option value="1">Ingeniería en Tecnologías de Manufactura</option>
                                                        <option value="2">Ingeniería en Tecnologías de la Información</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="row table-responsive">
                                    <table class="table table-hover" id="tblContratosPorFinalizar">
                                        <thead class="text-primary">
                                        <tr>
                                            <th>Id</th>
                                            <th>Profesor</th>
                                            <th>Tipo</th>
                                            <th>Carrera de Adscripción</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Acciones</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbContratoPorFinalizar">
                                        <tr>
                                          <td>1</td>
                                          <td>Said Polanco Martagón</td>
                                          <td>PTC</td>
                                          <td>Ingeniería en Tecnologías de la Información</td>
                                          <td>
                                            <a href="" class="text-danger">
                                              <i class="material-icons">directions_car</i>
                                            </a>
                                            <a href="" class="text-danger">
                                              <i class="material-icons">computer</i>
                                            </a>
                                            <a href="" class="text-danger">
                                              <i class="material-icons">precision_manufacturing</i>
                                            </a>
                                            <a href="" class="text-danger">
                                              <i class="material-icons">factory</i>
                                            </a>
                                            <a href="" class="text-danger">
                                              <i class="material-icons">supervised_user_circle</i>
                                            </a>
                                          </td>
                                          <td>
                                            <button onClick={()=>this.mostrarModalVista()}  href="" class="text-dark" data-toggle="modal" data-target="#mdlVerEstadoCargaFinalizada">
                                              <i class="material-icons">visibility</i>
                                            </button>
                                            <button href="" class="text-dark">
                                              <i class="material-icons">print</i>
                                            </button>
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
        </div> 

      
      
<Modal show={this.state.modalVista} aria-hidden="true" aria-labelledby="mdlVerEstadoCargaFinalizadaLabel" class="modal fade" id="mdlVerEstadoCargaFinalizada" role="dialog"
     tabindex="-1">

    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Carga Académica del Profesor</h5>
        <button onClick={()=>this.cerrarModalvista()}  aria-label="Close" class="close" data-dismiss="modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6 col-sm-6 text-center font-weight-bold">
            Dr. Said Polanco Martagón
          </div>
          <div class="col-md-6 col-sm-6 text-center font-weight-bold">
            Ingeniería en Tecnologías de la Información
          </div>
        </div>
        <hr class="text-dark"/>
        <div class="row">
          <div class="col-md-2 col-sm-2">
            <span class="material-icons text-success">thumb_up_alt</span>
          </div>
          <div class="col-md-10 col-sm-10">
            Ingeniería en Tecnologías de la Información
          </div>
        </div>
        <hr/>
        <div class="row table-responsive">
          <table class="table table-hover">
            <tbody>
            <tr>
              <td>ITI 1-3</td>
              <td>Algebra 1</td>
              <td>5 horas</td>
              <td>del <span id="fechaInicio">06/01/2022</span> al <span id="fechaCierre">21/04/2022</span></td>
            </tr>
            <tr>
              <td>ITI 7-1</td>
              <td>Programación Web</td>
              <td>6 horas</td>
              <td>del <span id="fechaInicio">06/01/2022</span> al <span id="fechaCierre">13/03/2022</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr class="text-dark"/>
        <div class="row">
          <div class="col-md-2 col-sm-2">
            <span class="material-icons text-danger">thumb_down_alt</span>
          </div>
          <div class="col-md-10 col-sm-10">
            Ingeniería en Tecnologías de Manufactura
          </div>
        </div>
        <hr/>
        <div class="row table-responsive">
          <table class="table table-hover">
            <tbody>
            <tr>
              <td>ITM 3-2</td>
              <td>Algebra 1</td>
              <td>5 horas</td>
              <td>del <span id="fechaInicio">06/01/2022</span> al <span id="fechaCierre">21/04/2022</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <hr class="text-dark"/>
        <div class="row">
          <div class="col-md-2 col-sm-2">
            <span class="material-icons text-danger">thumb_down_alt</span>
          </div>
          <div class="col-md-10 col-sm-10">
            Ingeniería en Sistemas Automotrices
          </div>
        </div>
        <hr/>
        <div class="row table-responsive">
          <table class="table table-hover">
            <tbody>
            <tr>
              <td>ISA 3-1</td>
              <td>Algebra 1</td>
              <td>5 horas</td>
              <td>del <span id="fechaInicio">06/01/2022</span> al <span id="fechaCierre">21/04/2022</span></td>
            </tr>
            </tbody>
          </table>
        </div>

      
      </div>
    </div>
  
</Modal>
      
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
