
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
  {id:1,correo :"julio@upv.edu.mx", activo:"si"}
];
const data2 = [
  {id:1,nombre: "julio",apellido:"zuñiga",telefono:"6342122341",extencion:"52",ima:"",}
];
const data3 = [
  {id:1,nivel: "DR",tipo:"P.A.",categoria: "A",inicio:"",fin: "",carrera:"ITI",}
];



  
class App extends React.Component {
  state = {
    data:data,
    data2:data2,
    data3:data3,
    
    ModalEditarDatos: false,
    ModalEditarPerfil: false,
    ModalEditarProfesor:false,
    form: {
      id:"",
      correo: "",
      activo:""
    },
    form2: {
      id:"",
      nombre: "",
      apellido:"",
      telefono:"",
      extencion:"",
      ima:"",
    },
    form3: {
      id:"",
      nivel: "",
      tipo:"",
      categoria: "",
      inicio:"",
      fin: "",
      carrera:"",
    },
  };

  mostrarModalEditarDatos = (dato) => {
    this.setState({form: dato, ModalEditarDatos: true });
  };
  cerrarModalEditarDatos = () => {
    this.setState({ ModalEditarDatos: false });
  };
  mostrarModalEditarPerfil = (dato2) => {
    this.setState({form2: dato2, ModalEditarPerfil: true });
  };
  cerrarModalEditarPerfil = () => {
    this.setState({ ModalEditarPerfil: false });
  };
  mostrarModalEditarProfesor = (dato3) => {
    this.setState({form3: dato3, ModalEditarProfesor: true });
  };
  cerrarModalEditarProfesor = () => {
    this.setState({ ModalEditarProfesor: false });
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangepe= (e) => {
    this.setState({
      form2: {
        ...this.state.form2,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangepr= (e) => {
    this.setState({
      form3: {
        ...this.state.form3,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  editard = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].correo = dato.correo;
        arreglo[contador].activo = dato.activo;
        
      }
      contador++;
    });
    this.setState({ data: arreglo, ModalEditarDatos: false });
  };
  editarpe = (dato2) => {
    var contador = 0;
    var arreglo = this.state.data2;
    arreglo.map((registro) => {
      if (dato2.id == registro.id) {
        arreglo[contador].nombre= dato2.nombre;
        arreglo[contador].apellido = dato2.apellido;
        arreglo[contador].telefono= dato2.telefono;
        arreglo[contador].extencion = dato2.extencion;
      }
      contador++;
    });
    this.setState({ data2: arreglo, ModalEditarPerfil: false });
  };
  editarpr = (dato3) => {
    var contador = 0;
    var arreglo = this.state.data3;
    arreglo.map((registro) => {
      if (dato3.id == registro.id) {
        arreglo[contador].nivel= dato3.nivel;
        arreglo[contador].tipo= dato3.tipo;
        arreglo[contador].categoria= dato3.categoria;
        arreglo[contador].inicio = dato3.inicio;
        arreglo[contador].fin = dato3.fin;
        arreglo[contador].carrera = dato3.carrera;
        
      }
      contador++;
    });
    this.setState({ data3: arreglo, ModalEditarProfesor: false });
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
                <div class="col-lg-4 col-md-4">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title">Datos de Usuarios </h4>
                        </div> 
                        <div class="card-body table-responsive">
                            <table id="tblDatosUsuario" class="table table-hover">
                                <tbody>
                                {this.state.data.map((dato) => (
                                  <tr>
                                    <tr>
                                    <td>Email</td>
                                    <td >{dato.correo}</td>      
                                    </tr>
                                    <tr>
                                        <td>Activo</td>
                                        <td>{dato.activo}</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Button onClick={() => this.mostrarModalEditarDatos(dato)} type="button" className="btn btn-primary" data-toggle="modal" data-bs-target="#ActualizarDatosCarrera">
                                          Editar
                                        </Button>
                                      </td>
                                    </tr>
                                  </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
                <div class="col-lg-8 col-md-8">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title">Datos de Perfil</h4>
                        </div> 
                        <div class="card-body table-responsive">
                            <table id="tblDatosPerfil" class="table table-hover">
                                <tbody>
                                {this.state.data2.map((dato2) => (  
                                  <tr>
                                    <tr>
                                     <td>Nombre</td>
                                     <td>{dato2.nombre}{" "}{dato2.apellido}</td>
                                  </tr>
                               <tr>
                                   <td>Teléfono</td>
                                   <td >{dato2.telefono}</td>
                               </tr>
                               <tr>
                                   <td>Extensión</td>
                                   <td >{dato2.extencion}</td>
                               </tr>
                               <tr >
                                   <td colspan="2">
                           <span class="material-icons">
                               account_circle
                           </span>
                                   </td>
                                   <td>{dato2.ima}</td>
                               </tr>
                                    <tr>
                                      <td>
                                        <Button onClick={() => this.mostrarModalEditarPerfil(dato2)} type="button" className="btn btn-primary" data-toggle="modal" data-bs-target="#ActualizarDatosCarrera">
                                          Editar
                                        </Button>
                                      </td>
                                    </tr>
                                  </tr>
                                  ))}
                               
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            </div> 
            <div id="perfil_profesor" class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title">Profesor / Perfil de Profesor</h4>
                        </div> 
                        <div class="card-body table-responsive">
                            <table id="tblDatosPerfilProfesor" class="table table-hover">
                                <tbody>
                                {this.state.data3.map((dato3) => (  
                              <tr>
                                <tr>
                                    <td>Nivel de Adscripción</td>
                                    <td >{dato3.nivel}</td>
                                </tr>
                                <tr>
                                    <td>Tipo Contrato</td>
                                    <td >{dato3.tipo}</td>
                                </tr>
                                <tr>
                                    <td>Categoría</td>
                                    <td >{dato3.categoria}</td>
                                </tr>
                                <tr>
                                    <td>Inicio de contrato</td>
                                    <td >{dato3.inicio}</td>
                                </tr>
                                <tr>
                                    <td>Fin de Contrato</td>
                                    <td>{dato3.fin}</td>
                                </tr>
                                <tr>
                                    <td>Carrera</td>
                                    <td >{dato3.carrera}</td>
                                </tr>
                                    <tr>
                                      <td>
                                        <Button onClick={() => this.mostrarModalEditarProfesor(dato3)} type="button" className="btn btn-primary" data-toggle="modal" data-bs-target="#ActualizarDatosCarrera">
                                          Editar
                                        </Button>
                                      </td>
                                    </tr>
                                  </tr>
                                  ))}
                                
                                </tbody>
                            </table>
                        </div> 
                        
                    </div> 
                </div> 
                <div class="col-lg-8 col-md-8">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title">Profesor / Carreras donde imparte Materias</h4>
                        </div> 
                        <div class="card-body table-responsive">
                            <table class="table table-hover">
                                <tbody id="tblProfesorImparteEn">
                                </tbody>
                            </table>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 


       


        <Modal show={this.state.ModalEditarDatos}   aria-hidden="true" aria-labelledby="EditarDatosUsuarioLabel" class="modal fade" id="EditarDatosUsuario" role="dialog"
        tabindex="-1">
        <div className="dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Actualizar Datos de Usuario</h5>
                    <button  onClick={() => this.cerrarModalEditarDatos()}  aria-label="Close" class="close" data-dismiss="modal" type="button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  id="frmEditarDatosUsuario">
                        <input id="hdnDatosUsuario" name="id_usuario" type="hidden" value="-1"/>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="txtEmailUsuario">Email</label>
                            <div class="col-sm-9">
                                <input onChange={this.handleChange}
                value={this.state.form.correo} class="form-control" id="txtEmailUsuario" name="correo" required
                                      type="email"/>
                            </div>
                        </div>
                        <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="txtEmailUsuario">Activo</label>
                            <div class="col-sm-9">
                                <select onChange={this.handleChange}
                value={this.state.form.activo} class="form-control" id="txtEmailUsuario" name="activo" required>
                                        <option value="si">si</option>
                                        <option value="no">no</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <button  onClick={() => this.editard(this.state.form)} class="btn btn-primary" data-toggle="modal" type="button" >Guardar</button>
                            <button onClick={() => this.cerrarModalEditarDatos()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Modal>


        <Modal show={this.state.ModalEditarPerfil} aria-hidden="true" aria-labelledby="EditarDatosPerfilLabel" class="modal fade" id="EditarDatosPerfil" role="dialog"
        tabindex="-1">
        <div class="dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Actualizar Perfil</h5>
                    <button onClick={() => this.cerrarModalEditarPerfil()} aria-label="Close" class="close" data-dismiss="modal" type="button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  id="frmEditarDatosPerfil" >
                        <input id="hdnIdUsuario" name="id_usuario" type="hidden" value="-1"/>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <label for="txtNombrePefil">Nombre(s)</label>
                                <input  onChange={this.handleChangepe}
                value={this.state.form2.nombre} class="form-control" id="txtNombrePefil" name="nombre" required type="text"/>
                            </div>
                            <div class="col-sm-6">
                                <label for="txtApellidosPerfil">Apellidos</label>
                                <input  onChange={this.handleChangepe}
                value={this.state.form2.apellido}  class="form-control" id="txtApellidosPerfil" name="apellido" required type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="txtTelefonoPefil">Teléfono</label>
                            <div class="col-sm-9">
                                <input  onChange={this.handleChangepe}
                value={this.state.form2.telefono}  class="form-control" id="txtTelefonoPefil" maxlength="10" minlength="10"
                                      name="telefono" type="number"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="txtExtensionPerfil">Extension</label>
                            <div class="col-sm-9">
                                <input  onChange={this.handleChangepe}
                value={this.state.form2.extencion}  class="form-control" id="txtExtensionPerfil" maxlength="4" minlength="4"
                                      name="extencion" type="text"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-auto">
                                <label class="form-label" for="txtFotoPerfil">Foto de perfil</label>
                                <input  onChange={this.handleChangepe}
                value={this.state.form2.ima}  accept="image/png, image/jpg, image/jpeg" class="form-control" id="txtFotoPerfil" name="ima"
                                      type="file"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <button  onClick={() => this.editarpe(this.state.form2)} class="btn btn-primary" type="button" >Guardar</button>
                            <button onClick={() => this.cerrarModalEditarPerfil()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Modal>


        <Modal show={this.state.ModalEditarProfesor}  id="EditarPerfilProfesor" aria-hidden="true" aria-labelledby="EditarPerfilProfesorLabel" class="modal fade" role="dialog" tabindex="-1">
        <div class="dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Actualizar Perfil de Profesor</h5>
                    <button onClick={() => this.cerrarModalEditarProfesor()}  aria-label="Close" class="close" data-dismiss="modal" type="button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form  id="frmEditarPerfilProfesor" >
                        <input id="hdnIdUsuarioProfesor" name="idUsuarioProfesor" type="hidden" value="-1" />
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="sctNivelAdscripcion">Nivel de Adscripción</label>
                            <div class="col-sm-9">
                                <select onChange={this.handleChangepr}
                value={this.state.form3.nivel} id="sctNivelAdscripcion" class="form-control" name='nivel'>
                                    <option value="Dr.">Doctor en Ciencias</option>
                                    <option value="M.C.">Maestro en Ciencias</option>
                                    <option value="M.A.">Maestro en Administración</option>
                                    <option value="Ing.">Ingeniero</option>
                                    <option value="Lic.">Licenciado</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="sctTipoContrato">Tipo de Contrato</label>
                            <div class="col-sm-9">
                                <select onChange={this.handleChangepr}
                value={this.state.form3.tipo} id="sctTipoContrato" class="form-control" name='tipo'>
                                    <option value="P.A">Profesor por Asignatura</option>
                                    <option value="P.T.C">Profesor Tiempo Completo</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label" for="sctCategoriaProfesor">Categoria</label>
                            <div class="col-sm-9">
                                <select  onChange={this.handleChangepr}
                value={this.state.form3.categoria} name="categoria"  id="sctCategoriaProfesor" class="form-control">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label" for="dteInicioContrato">Inicio de contrato</label>
                            <div class="col-sm-auto">
                                <input  onChange={this.handleChangepr}
                value={this.state.form3.inicio}  type="date" name='inicio' id="dteInicioContrato" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label" for="dteFinContrato">Fin de contrato</label>
                            <div class="col-sm-auto">
                                <input  onChange={this.handleChangepr}
                value={this.state.form3.fin}  type="date" name="fin" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-6 col-form-label" for="sctCarreraAdscripcion">Carrera de Adscripción</label>
                            <div class="col-sm-6">
                                <select  onChange={this.handleChangepr}
                value={this.state.form3.carrera}  id="sctCarreraAdscripcion" class="form-control" name='carrera'>
                                  <option value="ITI">ITI</option>
                                  <option value="IM">IM</option>
                                  <option value="ISA">ISA</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <button onClick={() => this.editarpr(this.state.form3)} id="btnSavePerfilProfesor" class="btn btn-primary" data-toggle="modal" type="button">Actualizar</button>
                            <button onClick={() => this.cerrarModalEditarProfesor()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
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
