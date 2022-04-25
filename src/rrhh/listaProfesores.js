
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


const data = [
  {id: "1",email:"julio@gmail.com", nombre :"julio",apellido:"zuniga",telefono:"8342434543",extension:"52",
  nivel:"DR",tipo:"P.A.", categoria: "A",carrera: "ITI",inicio:"",fin:"",Activo:"si" },
  
 
];

  
class App extends React.Component {
  state = {
    data: data,
   
    modalInsertar: false,
    modalVista: false,
 
    form: {
      id: "",email:"", nombre :"",apellido:"",telefono:"",extension:"",
  nivel:"",tipo:"", categoria: "",carrera: "",inicio:"",fin:"",Activo:"si" 
    },
  };

  mostrarModalVista = (dato) => {
    this.setState({form: dato, modalVista: true });
  };
  cerrarModalvista = () => {
    this.setState({ modalVista: false });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };


  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
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
          <div class="col-lg col-md">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title">Lista de Profesores</h4>
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
                  <table class="table table-hover" id="tblProfesores">
                    <thead class="text-primary">
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Carrera</th>
                      <th>Activo</th>
                      <th class="text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody id="tbListadoProfesores">
                    {this.state.data.map((dato) => (
                        <tr >
                          <td>{dato.id}</td>
                          <td>{dato.nombre}{" "}{dato.apellido}</td>
                          <td>{dato.categoria}</td>
                          <td>{dato.carrera}</td>
                          <td>{dato.Activo}</td>
                          <td>
                          
                          
                          <Button  onClick={()=> this.mostrarModalVista(dato)} type="button" rel="tooltip" title="Vista Rápida" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#VistaRapida">
                            <i className="material-icons">preview</i>
                          </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> 
              <div class="card-footer">
                <button onClick={()=>this.mostrarModalInsertar()} class="btn btn-primary" id="btnAgregarProfesor" type="button">Agregar Profesor</button>
              </div>
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  
 

<Modal show={this.state.modalVista} class="modal fade" id="VistaRapidaUsuario" tabindex="-1" role="dialog" aria-labelledby="VistaRapidaUsuarioLabel"
     aria-hidden="true">
  <div class="dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Vista Rápida</h5>
        <button onClick={()=>this.cerrarModalvista()} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="card">
            <div class="card-header-info">
              <h6 class="card-title">Datos de usuario</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-2">email</div>
                <div class="col-sm" id="qv-email-usuario">{this.state.form.email}</div>
              </div>
              <div class="row">
                <div class="col-sm-2">Nombre</div>
                <div class="col-sm" id="qv-nombre_usuario">{this.state.form.nombre}{" "}{this.state.form.apellido}</div>
              </div>
              <div class="row">
                <div class="col-sm-3">Teléfono</div>
                <div class="col-sm-4" id="qv-telefono-usuario">{this.state.form.telefono}</div>
                <div class="col-sm-2">Ext.</div>
                <div class="col-sm-2" id="qv-extension-usuario">{this.state.form.extension}</div>
              </div>
              <div class="row">
                <div class="col-sm-3">Tipo</div>
                <div class="col-sm-4" id="qv-tipo-usuario">{this.state.form.tipo}</div>
                <div class="col-sm-2">Activo</div>
                <div class="col-sm-2" id="qv-activo-usuario">{this.state.form.Activo}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="card" id="crdPerfilProfesor">
            <div class="card-header-warning">
              <h6 class="card-title">Datos de Profesor</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4" id="qv-nivel-adscripcion"></div>
                <div class="col-sm-4" id="qv-tipo-contrato"></div>
                <div class="col-sm-3">Categoria
                  <div id="qv-categoria-profesor">{this.state.form.categoria}</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">Inicio de Contrato</div>
                <div class="col-sm-3" id="qv-inicio-contrato">{this.state.form.inicio}</div>
                <div class="col-sm-3">Fin de Contrato</div>
                <div class="col-sm-3" id="qv-fin-contrato">{this.state.form.fin}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <butto onClick={()=>this.cerrarModalvista()}  type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</butto>
      </div>
    </div>
  </div>
</Modal>

<Modal show={this.state.modalInsertar} class="modal fade" id="mdlAgregarProfesor" tabindex="-1" role="dialog" aria-labelledby="mdlAgregarProfesorLabel"
     aria-hidden="true">
  <div class="dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Agregar Nuevo Profesor</h5>
        <button onClick={()=>this.cerrarModalInsertar()} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="frmNuevoProfesor" >
          <div class="card">
            <div class="card-header-primary">
              <h6 class="card-title">Datos de Usuario</h6>
            </div>
            <div class="card-body">
              <div class="row form-group">
                <label class="col-md-2" for="txtEmailNuevoUsuario">Email</label>
                <div class="col-md">
                  <input onChange={this.handleChange} name="email" class="form-control" type="email" id="txtEmailNuevoUsuario" maxlength="150" required/>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-6">
                  <label htmlFor="txtNombreNuevoUsuario">Nombre</label>
                  <input onChange={this.handleChange} name="nombre" type="text" class="form-control" id="txtNombreNuevoUsuario" maxlength="150" required/>
                </div>
                <div class="col-md-6">
                  <label for="txtApellidosNuevoUsuario">Apellidos</label>
                  <input onChange={this.handleChange} name="apellido" type="text" class="form-control" id="txtApellidosNuevoUsuario" maxlength="150" required/>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-6">
                  <label for="txtTelefonoNuevoUsuario">Teléfono</label>
                  <input onChange={this.handleChange} name="telefono" type="text" class="form-control" id="txtTelefonoNuevoUsuario" maxlength="10" minlength="10"/>
                </div>
                <div class="col-md-6">
                  <label for="txtExtencionNuevoUsuario">Extension</label>
                  <input onChange={this.handleChange} name="extension" type="text" class="form-control" id="txtExtencionNuevoUsuario" maxlength="4" minlength="4"/>
                </div>
              </div>
            </div>
          </div>
          <div class="card" id="crdNuevoUsuarioProfesor">
            <div class="card-header-warning">
              <h6 class="card-title">Datos del Profesor</h6>
            </div>
            <div class="card-body">
              <div class="row form-group">
                <div class="col-md-6">
                  <label htmlFor="sctNivelAdscNuevoProfesor">Nivel de Adscripción</label>
                  <select onChange={this.handleChange} name="nivel" class="form-control selectpicker"  id="sctNivelAdscNuevoProfesor" data-style="btn btn-link"
                  value={this.state.nivel}
                  >
                    <option value="Dr.">Doctor en Ciencias</option>
                    <option value="M.C.">Maestro en Ciencias</option>
                    <option value="M.A.">Maestro en Administración</option>
                    <option value="Ing.">Ingeniero</option>
                    <option value="Lic.">Licenciado</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="sctTipoContratoNuevoProfesor">Tipo Contrato</label>
                  <select onChange={this.handleChange} name="tipo" class="form-control selectpicker" id="sctTipoContratoNuevoProfesor" data-style="btn btn-link">
                    <option value="P.A">Profesor de Asignatura</option>
                    <option value="P.T.C">Profesor Tiempo Completo</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-8">
                  <label for="sctCarreraAdscNuevoProfesor">Carrera adscripción</label>
                  <select onChange={this.handleChange} name="carrera" class="form-control selectpicker" id="sctCarreraAdscNuevoProfesor" data-style="btn btn-link"
                          required>
                    <option value="ITI">Tecnologias de la Información</option>
                    <option value="ITM">Tecnologias de Manufactura</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="sctCategoriaNuevoProfesor">Categoria</label>
                  <select onChange={this.handleChange} name="categoria" class="form-control selectpicker" id="sctCategoriaNuevoProfesor" data-style="btn btn-link">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-6">
                  <label for="dteInicioContratoNuevoProfesor">Inicio de Contrato</label>
                  <input onChange={this.handleChange} name="inicio" type="date" id="dteInicioContratoNuevoProfesor" class="form-control"/>
                </div>
                <div class="col-md-6">
                  <label for="dteFinContratoNuevoProfesor">Fin de Contrato</label>
                  <input onChange={this.handleChange} name="fin" type="date" id="dteFinContratoNuevoProfesor" class="form-control"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md float-right">
              <button onClick={() => this.insertar()} type="button" class="btn btn-primary">Guardar</button>
              <button onClick={()=>this.cerrarModalInsertar()} type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </form>
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
