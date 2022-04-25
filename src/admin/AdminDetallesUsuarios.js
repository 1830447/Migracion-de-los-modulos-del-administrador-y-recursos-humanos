import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import UP_Victoria_200 from "./img/UP_Victoria_200.png";
import React, { useState } from "react";
import {
  Table,
  Button,

  Form,
  Modal,
} from "react-bootstrap";



const data = [
  {id:1, email:"julio@gmail.com", tipo :"profesor", activo: "si" },
  
];

const data1 = [
  {id:1, nombre :"julio", apellidos:"zuñiga", telefono:8342579610, extension:52},

];



const data3 = [
  {id:1,Nivel: "Dr", tipo :"completo",categoria:"A",IC:"O2/04/2022",FC:"05/04/2022",carrera:"iti" },
 
];

  class App extends React.Component {
    state = {
  
      data1:data1,
      data3:data3,
      data: data,
    
      modalInsertar: false,
      modalEditarDP: false,
      modalEditarDU: false,
      modalEditarPI: false,
      modalEditarPP: false,
      
      
      
      form: {
        id:"",
        email: "",
        tipo: "",
        activo: "",
      },
      form1: {
        id:"",
        nombre:"",
        apellidos:"",
        telefono: 1,
        extension:1
      },
      form3: {
        id:"",
        Nivel: "", 
        tipo :"",
        categoria:"",
        IC:"",
        FC:"",
        carrera:""
      },
    }; 

  
  mostrarModalEditarDU = (dato) => {
    this.setState({
      form: dato,
      modalEditarDU: true,
      
    });
  };

  cerrarModalEditarDU = () => {
    this.setState({ modalEditarDU: false });
  }
  mostrarModalEditarDP = (dato1) => {
    this.setState({
      form1: dato1,
      modalEditarDP: true,
      
    });
  };
  
  cerrarModalEditarDP = () => {
    this.setState({ modalEditarDP: false });
  }
  mostrarModalEditarPP = (dato3) => {
    this.setState({
      form3: dato3,
      modalEditarPP: true,
      
    });
  };

  cerrarModalEditarPP = () => {
    this.setState({  modalEditarPP: false });
  }

  mostrarModalEditarPI = () => {
    this.setState({
    
      modalEditarPI: true,
      
    });
  };

  cerrarModalEditarPI = () => {
    this.setState({ modalEditarPI: false });
  }
 
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].email = dato.email;
        arreglo[contador].tipo = dato.tipo;
        arreglo[contador].activo = dato.activo;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalEditarDU: false });
  };

  editarDP = (dato1) => {
    var contador1 = 0;
    var arreglo1 = this.state.data1;
    arreglo1.map((registro) => {
      if (dato1.id == registro.id) {
        arreglo1[contador1].nombre = dato1.nombre;
        arreglo1[contador1].apellidos = dato1.apellidos;
        arreglo1[contador1].telefono = dato1.telefono;
        arreglo1[contador1].extension = dato1.extension;
      
      }
      contador1++;
    });
    this.setState({ data1: arreglo1, modalEditarDP: false });
  };
  editarPP = (dato3) => {
    var contador3 = 0;
    var arreglo3 = this.state.data3;
    arreglo3.map((registro) => {
      if (dato3.id == registro.id) {
        arreglo3[contador3].Nivel = dato3.Nivel;
        arreglo3[contador3].tipo  = dato3.tipo ;
        arreglo3[contador3].categoria = dato3.categoria;
        arreglo3[contador3].IC = dato3.IC;
        arreglo3[contador3].FC = dato3.FC;
        arreglo3[contador3].carrera = dato3.carrera;
      
      }
      contador3++;
    });
    this.setState({ data3: arreglo3, modalEditarPP: false });
  };
  
  


  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    })
  };
  handleChangeDP= (e) => {
    this.setState({
      form1: {
        ...this.state.form1,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangePP= (e) => {
    this.setState({
      form3: {
        ...this.state.form3,
        [e.target.name]: e.target.value,
      },
    });
  };

    render(){
        
  
    
    return(
      <>
   
<body class="">
  <div class="wrapper ">
    <div class="sidebar" data-color="azure" data-background-color="white" data-image="../assets/img/sidebar-3.jpg">
      <div class="logo">
          <img src={UP_Victoria_200} alt='' class="mx-auto d-block img-fluid"/>
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
                    <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class="card-header card-header-primary">
                                <h4 class="card-title">Datos de Usuarios </h4>
                            </div> 
                            <div class="card-body table-responsive">
                                <table id="tblDatosUsuario" class="table table-hover">
                                    <tbody>
                                          {this.state.data.map((dato) => (
                                          <tr >
                                                <tr>
                                                  <td>Email</td>
                                                  <td>{dato.email}</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>Tipo</td>
                                                    <td>{dato.tipo}</td>
                                                </tr>
                                                <tr>
                                                <td>Activo</td>
                                                <td>{dato.activo}</td>
                                                </tr>
                                                <button  onClick={() => this.mostrarModalEditarDU(dato)}class="btn btn-primary" type="button" id="btnEditarDatosUsuario">Editar
                                              </button>     
                                          </tr>
                                          
                                         
                                        ))}
                                   
                                    </tbody>
                                </table>
                            </div> 
                            <div class="card-footer">
                            <div class="d-flex justify-content-start">
                                          
                            </div>
                                  <div class="d-flex justify-content-end">
                                    <button class="btn btn-round btn-warning" type="button" title="Reestablecer Contraseña">
                                      <i class="material-icons">
                                        sync_lock
                                      </i>
                                    </button>
                                  </div>
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
                                    {this.state.data1.map((dato1) => (
                                          <tr >
                                                <tr>
                                                  <td>nombre</td>
                                                  <td>{dato1.nombre + " "+ dato1.apellidos}</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>telefono</td>
                                                    <td>{dato1.telefono}</td>
                                                </tr>
                                                <tr>
                                                <td>Extension</td>
                                                <td>{dato1.extension}</td>
                                                </tr>
                                                <tr >
                                                <td colspan="2">
                                                  <span class="material-icons">
                                                      account_circle
                                                  </span>
                                                </td>
                                              </tr>
                                                <button  onClick={() => this.mostrarModalEditarDP(dato1)}class="btn btn-primary" type="button" id="btnEditarDatosUsuario">Editar
                                              </button> 

                                          </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> 
                            <div class="card-footer">
                              
                            </div>
                        </div> 
                    </div> 
                </div> 
                <div id="crea_perfil_profesor" class="row">
                    <div class="col-sm-2">
                        <button id="btnCreaPerfilProfesor" type="button" class="btn btn-primary">Crear Perfil de Profesor</button>
                    </div>
                </div>
                <div id="perfil_profesor" class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="card">
                            <div class="card-header card-header-primary">
                                <h4 class="card-title">Profesor / Perfil de Profesor</h4>
                            </div> 
                            <div class="card-body table-responsive">
                                <table id="tblDatosPerfilProfesor" className="table table-hover">
                                    <tbody>
                                    
                                    {this.state.data3.map((dato3) => (
                                          <tr >
                                                <tr>
                                        <td>Nivel de Adscripción</td>
                                        <td >{dato3.Nivel}</td>
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
                                        <td >{dato3.IC}</td>
                                    </tr>
                                    <tr>
                                        <td>Fin de Contrato</td>
                                        <td >{dato3.FC}</td>
                                    </tr>
                                    <tr>
                                        <td>Carrera</td>
                                        <td >{dato3.carrera}</td>
                                    </tr> 
                                    <tr>
                                    <button  onClick={() => this.mostrarModalEditarPP(dato3)}  class="btn btn-primary" id="btnEditarPerfilProfesor">
                                            Editar
                                        </button>
                                    </tr>
                                          </tr>
                                          
                                         
                                        ))}
                                  
                                    </tbody>
                                </table>
                            </div> 
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md">
                                        
                                    </div>
                                </div>
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
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md">
                                        <button onClick={() => this.mostrarModalEditarPI()} class="btn btn-primary" id="btnEditarCarrerasImparte" type="button">
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
        

<Modal show={this.state.modalEditarDU} aria-hidden="true" aria-labelledby="EditarDatosUsuarioLabel" class="modal fade" id="EditarDatosUsuario" role="dialog"
     tabindex="-1">
    <div class="dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Actualizar Datos de Usuario</h5>
                <button onClick={() => this.cerrarModalEditarDU()} aria-label="Close" class="close" data-dismiss="modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form  id="frmEditarDatosUsuario" >
                    <input id="hdnDatosUsuario" name="id_usuario" type="hidden" value="-1"/>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="txtEmailUsuario">Email</label>
                        <div class="col-sm-9">
                            <input onChange={this.handleChange}
                value={this.state.form.email} class="form-control" id="txtEmailUsuario" name="email" required
                                   type="email"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="sctTipoUsuario">Tipo</label>
                        <div class="col-sm-9">
                            <select value={this.state.data.tipo} onChange={this.handleChange} class="form-control" id="sctTipoUsuario" name="tipo" required>
                                <option value="profesor">Profesor</option>
                                <option value="director">Director</option>
                                <option value="RRHH">Recursos Humanos</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="sctTipoUsuario">Activo</label>
                        <div class="col-sm-9">
                        <select value={this.state.form.activo} onChange={this.handleChange} class="form-control" id="chkAvilitadoUsuario" name="activo" required>
                                <option value="si">si</option>
                                <option value="no">no</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <button onClick={() => this.editar(this.state.form)} class="btn btn-primary" data-toggle="modal" type="button">guardar</button>
                        <button onClick={() => this.cerrarModalEditarDU()}  class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Modal>


<Modal show={this.state.modalEditarDP}  aria-hidden="true" aria-labelledby="EditarDatosPerfilLabel" class="modal fade" id="EditarDatosPerfil" role="dialog"
     tabindex="-1">
    <div class="dialog" >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Actualizar Perfil</h5>
                <button onClick={() => this.cerrarModalEditarDP()} aria-label="Close" class="close" data-dismiss="modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form  id="frmEditarDatosPerfil" >
                    <input id="hdnIdUsuario" name="id_usuario" type="hidden" value="-1"/>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label for="txtNombrePefil">Nombre(s)</label>
                            <input onChange={this.handleChangeDP}
                value={this.state.form1.nombre} class="form-control" id="txtNombrePefil" name="nombre" required type="text"/>
                        </div>
                        <div class="col-sm-6">
                            <label for="txtApellidosPerfil">Apellidos</label>
                            <input onChange={this.handleChangeDP}
                value={this.state.form1.apellidos} class="form-control" id="txtApellidosPerfil" name="apellidos" required type="text"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  class="col-sm-3 col-form-label" for="txtTelefonoPefil">Teléfono</label>
                        <div class="col-sm-9">
                            <input onChange={this.handleChangeDP}
                value={this.state.form1.telefono} class="form-control" id="txtTelefonoPefil" maxlength="10" minlength="10"
                                   name="telefono" type="number"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="txtExtensionPerfil">Extension</label>
                        <div class="col-sm-9">
                            <input onChange={this.handleChangeDP}
                value={this.state.form1.extension} class="form-control" id="txtExtensionPerfil" maxlength="4" minlength="4"
                                   name="extension" type="number"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-auto">
                            <label class="form-label" for="txtFotoPerfil">Foto de perfil</label>
                            <input accept="image/png, image/jpg, image/jpeg" class="form-control" id="txtFotoPerfil" name="foto_perfil"
                                   type="file"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <button onClick={() => this.editarDP(this.state.form1)} class="btn btn-primary" type="button" >Guardar</button>
                        <button onClick={() => this.cerrarModalEditarDP()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Modal>


<Modal show={this.state.modalEditarPI}   id="EditarProfesorImparteEn" aria-hidden="true" aria-labelledby="EditarProfesorImparteEnLabel" class="modal fade" role="dialog" tabindex="-1">
  <div class="dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Actualizar las Carreras donde el Profesor Imparte Materias</h5>
        <button onClick={() => this.cerrarModalEditarPI()}  aria-label="Close" class="close" data-dismiss="modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form  id="frmProfesorImparteEn" >
          <input id="hdnIdProfesor" name="id_profesor" type="hidden" value="-1" />
            <div class="row">
                  <div class="col-md">
                      <table>
                          <tbody id="tblCarrerasDondeImparte">
                          </tbody>
                      </table>
                  </div>
            </div>
            <div class="form-group row">
                <button  onClick={() => this.editarPI()} class="btn btn-primary" type="button" >Guardar</button>
                <button onClick={() => this.cerrarModalEditarPI()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</Modal>


<Modal show={this.state.modalEditarPP}  id="EditarPerfilProfesor" aria-hidden="true" aria-labelledby="EditarPerfilProfesorLabel" class="modal fade" role="dialog" tabindex="-1">
    <div class="dialog" >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Actualizar Perfil de Profesor</h5>
                <button onClick={() => this.cerrarModalEditarPP()} aria-label="Close" class="close" data-dismiss="modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form  >
                   
                   
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="sctNivelAdscripcion">Nivel de Adscripción</label>
                        <div class="col-sm-9">
                            <select onChange={this.handleChangePP} value={this.state.form3.Nivel} id="Nivel" name="Nivel" class="form-control">
                                <option value="Dr.">Doctor en Ciencias</option>
                                <option value="M.C">Maestro en Ciencias</option>
                                <option value="M.A.">Maestro en Administración</option>
                                <option value="Ing.">Ingeniero</option>
                                <option value="Lic.">Licenciado</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3 col-form-label" for="sctTipoContrato">Tipo de Contrato</label>
                        <div class="col-sm-9">
                            <select onChange={this.handleChangePP}
                value={this.state.form3.tipo} id="Tipo" name="tipo" class="form-control">
                                <option value="P.A">Profesor por Asignatura</option>
                                <option value="P.T.C">Profesor Tiempo Completo</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                       <label class="col-sm-3 col-form-label" for="sctCategoriaProfesor">Categoria</label>
                        <div class="col-sm-9">
                            <select onChange={this.handleChangePP}
                value={this.state.form3.categoria} name="categoria" id="Categoria" class="form-control">
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
                            <input onChange={this.handleChangePP}
                value={this.state.form3.IC} type="date" id="dteInicioContrato" name='IC' class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-form-label" for="dteFinContrato">Fin de contrato</label>
                        <div class="col-sm-auto">
                            <input onChange={this.handleChangePP}
                value={this.state.form3.FC} type="date" id="dteFinContrato" name='FC' class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-6 col-form-label" for="sctCarreraAdscripcion">Carrera de Adscripción</label>
                        <div class="col-sm-6">
                            <select onChange={this.handleChangePP}
                value={this.state.form3.carrera} name="carrera" id="sctCarreraAdscripcion" class="form-control">
                              <option value="ITI">ITI</option>
                              <option value="IM">IM</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <button onClick={() => this.editarPP(this.state.form3)}  class="btn btn-primary" type="button">Actualizar</button>
                        <button onClick={() => this.cerrarModalEditarPP()} class="btn btn-secondary" data-dismiss="modal" type="button">Cancelar</button>
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