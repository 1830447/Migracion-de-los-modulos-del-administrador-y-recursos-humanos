
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
  {id:1,clave: "ITI-2018", nombre :"Ingeniería en Tecnologías de la Información",anio:"	2018", nivel: "	Ingeniería",carrera:"Ingeniería en Tecnologías de la Información" },
];

const data1 = [
  {idc:1,periodo: "Enero - Abril",anioc:"2020",iniciar:"03/01/2020",finaliza:"25/04/2020" },
  {idc:2,periodo: "Mayo - Agosto",anioc:"2020" ,iniciar:"03/01/2020",finaliza:"25/04/2020"},
  {idc:3,periodo: "Septiembre - Diciembre",anioc: "2020",iniciar:"03/01/2020",finaliza:"25/04/2020"},
  {idc:4,periodo: "Mayo - Agosto",anioc: "2020",iniciar:"03/01/2020",finaliza:"25/04/2020"},
];
const data2= [
  {idm:1,clave: "ING-01", nombre:"	Inglés I",cuatrimestre:"1", tipo: "Inglés",creditos:"",posicion:"",hrstot:"", },
  {idm:2,clave: "MAT-01", nombre:"	Algebra 1",cuatrimestre:"	2", tipo: "Ciencias básicas",creditos:"",posicion:"",hrstot:"",  },
  {idm:3,clave: "LenAut-01", nombre:"Lenguajes y Autómatas",cuatrimestre:"	7", tipo: "Especialidad",creditos:"",posicion:"",hrstot:"",  },
  
];

  
class App extends React.Component {
  state = {
    data: data,
    data1: data1,
    data2: data2,
    modalInsertar: false,
    modalInsertarm: false,
    modalEditar: false,
    modalEditarc: false,
    modalEditarm: false,
    modalVista: false,
    modalActualizar: false,
    form: {
      id:"",
      clave: "",
      nombre: "",
      anio: "",
      nivel: "",
      carrera: "",
    },
    form1: {
      idc:"",
      periodo: "",
      anioc: "",
      iniciar: "",
      finaliza: "",
    },
    form2: {
      idm:"",
      clave: "",
      nombre: "",
      cuatrimestre: "",
      tipo: "",
      creditos:"",
      posicion:"",
      hrstot:1,

      
    },
  };
  
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalEditar = (dato1) => {
    this.setState({
      form1: dato1,
      modalEditarc: true,
    });
  };
  cerrarModalEditar = () => {
    this.setState({ modalEditarc: false });
  };
  
  mostrarModalEditarm = (dato2) => {
    this.setState({
      form2: dato2,
      modalEditarm: true,
    });
  };
  cerrarModalEditarm = () => {
    this.setState({ modalEditarm: false });
  };

  mostrarModalVista = (dato2) => {
    this.setState({form2: dato2, modalVista: true });
  };
  cerrarModalVista = () => {
    this.setState({ modalVista: false });
  };
  

  mostrarModalInsertarm = () => {
    this.setState({
      modalInsertarm: true,
    });
  };

  cerrarModalInsertarm = () => {
    this.setState({ modalInsertarm: false });
  };
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
        arreglo[contador].clave = dato.clave;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].anio = dato.anio;
        arreglo[contador].nivel = dato.nivel;
        arreglo[contador].carrera = dato.carrera;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  editarc = (dato1) => {
    var contador = 0;
    var arreglo1 = this.state.data1;
    arreglo1.map((registro) => {
      if (dato1.idc == registro.idc) {
        arreglo1[contador].periodo = dato1.periodo;
        arreglo1[contador].anioc = dato1.anioc;
        arreglo1[contador].iniciar = dato1.iniciar;
        arreglo1[contador].finaliza = dato1.finaliza;
      }
      contador++;
    });
    this.setState({ data1: arreglo1, modalEditarc: false });
  };

  editarm = (dato2) => {
    var contador = 0;
    var arreglo = this.state.data2;
    arreglo.map((registro) => {
      if (dato2.idm == registro.idm) {
        arreglo[contador].clave = dato2.clave;
        arreglo[contador].nombre = dato2.nombre;
        arreglo[contador].cuatrimestre = dato2.cuatrimestre;
        arreglo[contador].tipo = dato2.tipo;
        arreglo[contador].creditos = dato2.creditos;
        arreglo[contador].posicion = dato2.posicion;
        arreglo[contador].hrstot = dato2.hrstot;
      }
      contador++;
    });
    this.setState({ data2: arreglo, modalEditarm: false });
  };
 
 
  
  insertar= ()=>{
    var valorNuevo= {...this.state.form1};
    valorNuevo.idc=this.state.data1.length+1;
    var lista= this.state.data1;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data1: lista });
  }
   
  
  insertarm= ()=>{
    var valorNuevo= {...this.state.form2};
    valorNuevo.idm=this.state.data2.length+1;
    var lista= this.state.data2;
    lista.push(valorNuevo);
    this.setState({ modalInsertarm: false, data2: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangec = (e) => {
    this.setState({
      form1: {
        ...this.state.form1,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangem = (e) => {
    this.setState({
      form2: {
        ...this.state.form2,
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
            <a class="navbar-brand" href="">Home / Dashboard</a>
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
      <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="ccol-lg-20 col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Datos del Plan de Estudios</h4>
            </div> 
            <div className="card-body table-responsive">
              <table className="table table-hover">
                <tbody>
                {this.state.data.map((dato) => (
                <tr >
                  <tr>
                    <td>Clave</td>
                    <td>{dato.clave}</td>
                  </tr>
                  <tr>
                    <td>Nombre</td>
                    <td>{dato.nombre}</td>
                  </tr>
                  <tr>
                    <td>Año</td>
                    <td>{dato.anio}</td>
                  </tr>
                  <tr>
                    <td>Nivel</td>
                    <td>{dato.nivel}</td>
                  </tr>
                  <tr>
                    <td>Carrera</td>
                    <td>{dato.carrera}</td>
                  </tr>
                  <tr>
                  <td>
                  <Button onClick={()=>this.mostrarModalActualizar(dato)}  type="button" className="btn btn-primary">Actualizar</Button>
                  </td>
                  </tr>
                  
                
                </tr>
              ))}
                 
                </tbody>
              </table>

              
              <Modal show={this.state.modalActualizar} className="modal fade" id="DatosPlan">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <Modal.Header className="modal-header">
                      <h5 className="modal-title" id="DatosPlanLabel">Actualizar Plan de Estudio</h5>
                      <button onClick={() => this.cerrarModalActualizar()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </Modal.Header>
                    <Form>
                      <Modal.Body class="modal-body">
                        <label for="Name">Nombre</label>
                        <input  onChange={this.handleChange}
                value={this.state.form.nombre}  type="text" id="nombre" name="nombre" required/>
                        <br/>
                        <br/>
                        <label for="Name">Año</label>
                        <input  onChange={this.handleChange}
                value={this.state.form.anio}  type="text" id="anio" name="anio" required/>
                        <br/>
                        <br/>
                        <label for="Nivel">Nivel</label>
                        <select onChange={this.handleChange}
                value={this.state.form.nivel} name="nivel" id="nivel" required>
                          <option value="Ingenieria">Ingenieria</option>
                          <option value="M.I.">M.I.</option>
                        </select>
                      </Modal.Body>
                    </Form>
                    <script>
                      $("#commentForm").validate();
                    </script>
                    <Modal.Footer class="modal-footer">
                      <Button onClick={() => this.editar(this.state.form)} type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                      <Button onClick={() => this.cerrarModalActualizar()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </Modal.Footer>
                  </div>
                </div>
              </Modal>
            </div> 
           
          </div>
        </div> 
      </div>
    </div> 

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-25 col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Cargas Académicas</h4>
            </div> 
            <div className="card-body table-responsive">
              <table className="table table-hover">
                <thead className="text-primary">
                  <tr>
                    <th>Id</th>
                    <th>Periodo</th>
                    <th>Año</th>
                    <th>Iniciar</th>
                    <th>Finaliza</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.data1.map((dato1) => (
                <tr >
                  <td>{dato1.idc}</td>
                  <td>{dato1.periodo}</td>
                  <td>{dato1.anioc}</td>
                  <td>{dato1.iniciar}</td>
                  <td>{dato1.finaliza}</td>
                  <td>
                  <Button onClick={() => this.mostrarModalEditar(dato1)} type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-target="#EditarUsuario">
                        <i className="material-icons">edit</i>
                      </Button>
                   
                  </td>
                </tr>
              ))}
                 
                </tbody>
              </table>

          
              <Modal show={this.state.modalEditarc} className="modal fade" id="ActualizarDatosCarga" tabindex="-1" role="dialog" aria-labelledby="ActualizarDatosCargaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ActualizarDatosCargaLabel">Actualizar Datos de Carga Académica</h5>
                      <button onClick={() => this.cerrarModalEditar()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                      <div class="modal-body">
                        <label for="Periodo">Periodo</label>
                        <select onChange={this.handleChangec}
                value={this.state.form1.periodo} name="periodo" required>
                          <option value="enero-abril">Enero - Abril</option>
                          <option value="Mayo - Agosto">Mayo - Agosto</option>
                          <option value="Septiembre - Diciembre">Septiembre - Diciembre</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="Anio">Año</label>
                        <select onChange={this.handleChangec}
                value={this.state.form1.anioc} name="anioc" required>
                          <option value={2021}>2021</option>
                          <option value={2020}>2020</option>
                          <option value={2019}>2019</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="FechaI">Fecha de Inicio</label>
                        <input onChange={this.handleChangec}
                value={this.state.form1.iniciar} type="date" id="iniciar" name="iniciar" required />
                        <br/>
                        <br/>
                        <label for="FechaF">Fecha Final</label>
                        <input onChange={this.handleChangec}
                value={this.state.form1.finaliza} type="date" id="finaliza" name="finaliza" required />
                      </div>
                    </form>
                    <script>
                      $("#commentForm").validate();
                    </script>
                    <div className="modal-footer">
                      <button onClick={() => this.editarc(this.state.form1)} type="button" className="btn btn-primary" data-toggle="modal">Guardar</button>
                      <button onClick={() => this.cerrarModalEditar()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </Modal>

              
              <Modal show={this.state.modalInsertar}  className="modal fade" id="AgregarCargaAcademica" tabindex="-1" role="dialog" aria-labelledby="AgregarCargaAcademicaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ActualizarDatosCargaLabel">Agregar Carga Academica</h5>
                      <button onClick={() => this.cerrarModalInsertar()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                      <div className="modal-body">
                        <label for="Periodo">Periodo</label>
                        <select  onChange={this.handleChangec}     name="periodo" required>
                          <option value="Enero - Abril">Enero - Abril</option>
                          <option value="Mayo - Agosto">Mayo - Agosto</option>
                          <option value="Septiembre - Diciembre">Septiembre - Diciembre</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="Anio">Año</label>
                        <select  onChange={this.handleChangec}  name="anioc" required>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="FechaI">Fecha de Inicio</label>
                        <input onChange={this.handleChangec}  type="date" id="fechai" name="iniciar" required />
                        <br/>
                        <br/>
                        <label for="FechaF">Fecha Final</label>
                        <input onChange={this.handleChangec} type="date" id="fechaf" name="finaliza" required />
                      </div>
                    </form>
                    <script>
                      $("#commentForm").validate();
                    </script>
                    <div className="modal-footer">
                      <Button onClick={() => this.insertar()} type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                      <Button onClick={() => this.cerrarModalInsertar()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div> 
            <div className="card-footer">
            <button onClick={()=>this.mostrarModalInsertar()} type="button" class="btn btn-primary" data-toggle="modal" data-target="#AgregarCargaAcademica">Agregar</button>
            </div>
          </div> 
        </div> 
      </div> 
    </div> 

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-25 col-md-20">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Materias</h4>
            </div> 
            <div className="card-body table-responsive">
              <Table className="table table-hover">
                <thead className="text-primary">
                  <tr>
                  <th>ID</th>
                    <th>Clave</th>
                    <th>Nombre</th>
                    <th>Cuatrimestre</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.data2.map((dato2) => (
                <tr >
                   <td>{dato2.idm}</td>
                  <td>{dato2.clave}</td>
                  <td>{dato2.nombre}</td>
                  <td>{dato2.cuatrimestre}</td>
                  <td>{dato2.tipo}</td>
                  <td>
                  <button  onClick={() => this.mostrarModalEditarm(dato2)} type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-target="#EditarUsuario">
                        <i className="material-icons">edit</i>
                      </button>
                      <button onClick={() => this.mostrarModalVista(dato2)} type="button" rel="tooltip" title="Vista Rápida" class="btn btn-primary btn-link" data-toggle="modal" data-target="#VistaRapida">
                        <i className="material-icons">preview</i>
                      </button>
                   
                  </td>
                </tr>
              ))}
                 
                </tbody>
              </Table>

              
              <Modal show={this.state.modalEditarm} className="modal fade" id="ActualizarDatosMateria" tabindex="-1" role="dialog" aria-labelledby="ActualizarDatosMateriaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ActualizarDatosMateriaLabel">Actualizar Datos de Materia</h5>
                      <button onClick={() => this.cerrarModalEditarm()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                      <div className="modal-body">
                        <label for="Name">Nombre</label>
                        <input  onChange={this.handleChangem}
                value={this.state.form2.nombre} type="text" id="nombre" name="nombre"/>
                        <br/>
                        <br/>
                        <label for="Creditos">Creditos</label>
                        <input onChange={this.handleChangem}
                value={this.state.form2.creditos} type="number" id="creditos" name="creditos"/>
                        <br/>
                        <br/>
                        <label for="Cuatrimestre">Cuatrimestre</label>
                        <select onChange={this.handleChangem}
                value={this.state.form2.cuatrimestre} name="cuatrimestre">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="Posicion">Posición</label>
                        <select onChange={this.handleChangem}
                value={this.state.form2.posicion} name="posicion">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="HrsTot">Horas Totales</label>
                        <input onChange={this.handleChangem}
                value={this.state.form2.hrstot} type="number" id="hrstot" name="hrstot"/>
                        <br/>
                        <br/>
                        <label for="Tipo">Tipo</label>
                        <select onChange={this.handleChangem}
                value={this.state.form2.tipo} name="tipo">
                          <option value="Ciencias básicas">Ciencias básicas</option>
                          <option value="Inglés">Inglés</option>
                          <option value="Especialidad">Especialidad</option>
                        </select>
                      </div>
                    </form>
                    <script>
                      $("#commentForm").validate();
                    </script>
                    <div className="modal-footer">
                      <Button  onClick={() => this.editarm(this.state.form2)} type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                      <Button onClick={() => this.cerrarModalEditarm()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </Modal>

              
              <Modal show={this.state.modalVista}  className="modal fade" id="VistaRapida" tabindex="-1" role="dialog" aria-labelledby="VistaRapidaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="VistaRapidaLabel">Vista Materia</h5>
                      <button onClick={() => this.cerrarModalVista()} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">       
                <tr >
                  <tr>
                    <td>Clave: </td>
                    <td>{this.state.form2.clave}</td>
                  </tr>
                  <tr>
                    <td>Nombre: </td>
                    <td>{this.state.form2.nombre}</td>
                  </tr>
                  <tr>
                    <td>Cuatrimestre: </td>
                    <td>{this.state.form2.cuatrimestre}</td>
                  </tr>
                  <tr>
                    <td>Tipo: </td>
                    <td>{this.state.form2.tipo}</td>
                  </tr>
                  <tr>
                    <td>Creditos: </td>
                    <td>{this.state.form2.creditos}</td>
                  </tr>
                  <tr>
                    <td>posicion: </td>
                    <td>{this.state.form2.posicion}</td>
                  </tr>
                  <tr>
                    <td>Horas Totales: </td>
                    <td>{this.state.form2.hrstot}</td>
                  </tr>
                </tr>
            
                    </div>
                    <div class="modal-footer">
                      <button onClick={() => this.cerrarModalVista()}  type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </Modal>

              
              <Modal show={this.state.modalInsertarm} className="modal fade" id="AgregarMateria" tabindex="-1" role="dialog" aria-labelledby="AgregarMateriaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="AgregarMateriaLabel">Agregar Materia</h5>
                      <button onClick={() => this.cerrarModalInsertarm()}  type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form>
                      <div className="modal-body">
                        <label for="Clave">Clave</label>
                        <input onChange={this.handleChangem} type="text" id="clave" name="clave" required />
                        <br/>
                        <br/>
                        <label for="Nombre">Nombre</label>
                        <input onChange={this.handleChangem} type="text" id="nombre" name="nombre" required />
                        <br/>
                        <br/>
                        <label for="Creditos">Creditos</label>
                        <input onChange={this.handleChangem} type="number" id="creditos" name="creditos" required />
                        <br/>
                        <br/>
                        <label for="Cuatrimestre">Cuatrimestre</label>
                        <select onChange={this.handleChangem}  name="cuatrimestre" required>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="Posicion">Posición</label>
                        <select onChange={this.handleChangem} name="posicion" required>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                        <br/>
                        <br/>
                        <label for="HrsTot">Horas Totales</label>
                        <input onChange={this.handleChangem} type="number" id="hrstot" name="hrstot" required />
                        <br/>
                        <br/>
                        <label for="Tipo">Tipo</label>
                        <select onChange={this.handleChangem} name="tipo" required>
                          <option value="Ciencias básicas">Ciencias básicas</option>
                          <option value="Inglés">Inglés</option>
                          <option value="Especialidad">Especialidad</option>
                        </select>
                      </div>
                    </form>
                    <script>
                      $("#commentForm").validate();
                    </script>
                    <div class="modal-footer">
                      <Button  onClick={() => this.insertarm()} type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                      <Button onClick={() => this.cerrarModalInsertarm()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div> 
            <div className="card-footer">
              <Button onClick={()=>this.mostrarModalInsertarm()} type="button" className="btn btn-primary" data-toggle="modal" data-target="#AgregarMateria">Agregar</Button>
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
