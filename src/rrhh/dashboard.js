
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
            <a class="navbar-brand" href="javascript:;">Home / Dashboard</a>
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

            <div class="col-lg-12 col-mg-12 col-sm-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="header-title">Contratos por finalizar</h4>
                    </div> 
                    <div class="card-body table-responsive">
                        <table class="table table-hover">
                            <thead class="text-primary">
                                <tr>
                                    <th>ID</th>
                                    <th>Finalizar</th>
                                    <th>Nombre</th>
                                    <th>Adscripción</th>
                                    <th>Status</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                              <input class="form-check-input" type="checkbox" value=""/>
                                              <span class="form-check-sign">
                                                <span class="check"></span>
                                              </span>
                                            </label>
                                          </div>
                                    </td>
                                    <td>
                                        Said Polanco Martagón
                                    </td>
                                    <td>Ingeniería en Tecnologías de la Información</td>
                                    <td>
                                        <i class="material-icons text-muted">directions_car</i>
                                        <i class="material-icons text-muted">store</i>
                                        <i class="material-icons text-muted">business</i>
                                        <i class="material-icons text-muted">settings_suggest</i>
                                        <i class="material-icons text-muted">insert_emoticon</i>
                                        <i class="material-icons text-success">computer</i>
                                    </td>
                                    <td>
                                      <button onClick={()=>this.mostrarModalVista()} type="button" rel="tooltip" title="Visualizar" class="btn btn-primary btn-link" data-toggle="modal" data-target="#visualizarContrato">
                                        <i class="material-icons">visibility</i>
                                      </button>
                                      <button type="button" rel="tooltip" title="Imprimir" class="btn btn-primary btn-link">
                                        <i class="material-icons">print</i>
                                      </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                              <input class="form-check-input" type="checkbox" value=""/>
                                              <span class="form-check-sign">
                                                <span class="check"></span>
                                              </span>
                                            </label>
                                          </div>
                                    </td>
                                    <td>
                                        Yahir Hernández Mier
                                    </td>
                                    <td>Ingeniería en Mecatrónica</td>
                                    <td>
                                         <i class="material-icons text-muted">directions_car</i> 
                                         <i class="material-icons text-muted">store</i> 
                                        <i class="material-icons text-muted">business</i> 
                                        <i class="material-icons text-success">settings_suggest</i>
                                         <i class="material-icons text-muted">insert_emoticon</i> 
                                        <i class="material-icons text-success">computer</i>
                                    </td>
                                    <td>
                                      <button onClick={()=>this.mostrarModalVista()} type="button" rel="tooltip" title="Visualizar" class="btn btn-primary btn-link" data-toggle="modal" data-target="#visualizarContrato">
                                        <i class="material-icons">visibility</i>
                                      </button>
                                      <button type="button" rel="tooltip" title="Imprimir" class="btn btn-primary btn-link">
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

      
      <Modal show={this.state.modalVista} class="modal fade" id="visualizarContrato" tabindex="-1" role="dialog" aria-labelledby="NewProduct" aria-hidden="true">
        
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Contrato por finalizar</h5>
              <button onClick={()=>this.cerrarModalvista()} type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
              <div class="table-responsive">
                <table class="table">
                    <thead class="text-primary">
                        <tr>
                            <th colspan="3">Juan López Martínez</th>
                            <th colspan="2">Ingeniería en Mecatrónica</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><i class="material-icons">thumb_down</i></td>
                        <td colspan="4">Ingeniería en Tecnologías de la Información</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>ITI 1-3</td>
                        <td>Álgebra I</td>
                        <td>5 horas</td>
                        <td>del 06/01/2021 al 26/04/2021</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>ITI 7-1</td>
                        <td>Programación web</td>
                        <td>6 horas</td>
                        <td>del 06/01/2021 al 13/03/2021</td>
                      </tr>

                      <tr>
                        <td><i class="material-icons">thumb_down</i></td>
                        <td colspan="4">Ingeniería en Tecnologías de Manufactura</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>IM 3-2</td>
                        <td>Álgebra I</td>
                        <td>5 horas</td>
                        <td>del 06/01/2021 al 26/04/2021</td>
                      </tr>

                      <tr>
                        <td><i class="material-icons">thumb_up</i></td>
                        <td colspan="4">Ingeniería en Sistemas Automotrices</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>ISA 3-1</td>
                        <td>Álgebra I</td>
                        <td>5 horas</td>
                        <td>del 06/01/2021 al 26/04/2021</td>
                      </tr>
                    </tbody>
                </table>
              </div> 
            </div>
            <div class="modal-footer">
              <button onClick={()=>this.cerrarModalvista()} type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
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
  
  

  
</body>
</>
  );
  }
}

export default App;
