import './App.css'; 
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
  {id:1, clave: "ITI-2018", nombre :"Ingeniería en Tecnologías de la Información",Nivel:"ingenieria", anio: 2018 },
  {id:2,clave: "ITI-2010", nombre:"Ingeniería en Tecnologías de la Información",Nivel:"ingenieria", anio:2010},
  {id:3,clave: "PA-TI-2018", nombre: "Profesional Asociado en Tecnologías de la Información", Nivel:"ingenieria",anio: 2018},
];

const data1 = [
  {id:1, nombrep :"Said Planco Martagón" },
  {id:2, nombrep:"Jorge Arturo Hernández Almazán"},
  {id:3, nombrep: "Marco Aurelio Nuño Maganda"},
];


const data2 = [
  {id:1,clave: "ITI", nombrec :"Ingeniería en Tecnologías de la Información",nivel:"Ingenieria",director:"Mario Humberto Rodriguez Chavez" },
 
];

  
class App extends React.Component {
  state = {
    data2:data2,
    data1:data1,
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    modalVista: false,
    modalVista1: false,
    modalEditar: false,
    modalEditarp: false,
    
    form: {
      id:"",
      clave: "",
      nombre: "",
      Nivel:"",
      anio: 1,
    },
    form1: {
      id:"",
      nombrep: "",
    
    },
    form2: {
      id:"",
      nombrec: "",
      nivel: "",
      director:""
    
    },
  };
  
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  }
  mostrarModalActualizar = (dato2) => {
    this.setState({ 
      form2: dato2,
      modalActualizar: true 
    });
  }
  
  mostrarModalVista1 = (dato1) => {
    
    this.setState({form1: dato1, modalVista1: true });
  };
  cerrarModalvista1 = () => {
    this.setState({ modalVista1: false });
  };
  
  mostrarModalVista = (dato) => {
    
    this.setState({form: dato, modalVista: true });
  };
  cerrarModalvista = () => {
    this.setState({ modalVista: false });
  };
  mostrarModalEditar = (dato) => {
    this.setState({
      form: dato,
      modalEditar: true,
    });
  };

  cerrarModalEditar = () => {
    this.setState({ modalEditar: false });
  }
  mostrarModalEditarp = (dato1) => {
    this.setState({
      form1: dato1,
      modalEditarp: true,
    });
  };

  cerrarModalEditarp = () => {
    this.setState({ modalEditarp: false });
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
        arreglo[contador].clave = dato.clave;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].Nivel = dato.Nivel;
        arreglo[contador].anio = dato.anio;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalEditar: false });
  };

  editarp = (dato1) => {
    var contador1 = 0;
    var arreglo1 = this.state.data1;
    arreglo1.map((registro) => {
      if (dato1.id == registro.id) {
        arreglo1[contador1].nombrep = dato1.nombrep;
      
      }
      contador1++;
    });
    this.setState({ data1: arreglo1, modalEditarp: false });
  };
  
  editarc = (dato2) => {
    var contador2 = 0;
    var arreglo2 = this.state.data2;
    arreglo2.map((registro) => {
      if (dato2.id == registro.id) {
        arreglo2[contador2].nombrec = dato2.nombrec;
        arreglo2[contador2].nivel = dato2.nivel;
        arreglo2[contador2].director = dato2.director;
      }
      contador2++;
    });
    this.setState({ data2: arreglo2, modalActualizar: false });
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
  handleChangep= (e) => {
    this.setState({
      form1: {
        ...this.state.form1,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleChangec= (e) => {
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
            <img src={UP_Victoria_200} alt="" className="mx-auto d-block img-fluid"/>
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
      

      <div className="content">
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-20 col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Datos de la Carrera</h4>
                </div> 
                <div className="card-body table-responsive">
                  <Table className="table table-hover">
                    <thead>
                    </thead>
                    <tbody>
                    {this.state.data2.map((item) => (
                <tr >
                  <tr>
                        <td>Clave</td>
                        <td>{item.clave}</td>
                      </tr>
                      <tr>
                        <td>Nombre</td>
                        <td>{item.nombrec}</td>
                      </tr>
                      <tr>
                        <td>Nivel</td>
                        <td>{item.nivel}</td>
                      </tr>
                      <tr>
                        <td>Director</td>
                        <td>{item.director}</td>
                      </tr>
                      <tr>
                      <td>
                          <Button onClick={() => this.mostrarModalActualizar(item)} type="button" className="btn btn-primary" data-toggle="modal" data-bs-target="#ActualizarDatosCarrera">
                            Actualizar
                          </Button>
                          
                        </td>
                      </tr>
                      
                 
                  
                 
                </tr>
              ))}
                     
                    </tbody>
                  </Table>
    
                  
                  <Modal show={this.state.modalActualizar}  className="modal fade" id="ActualizarDatosCarrera" tabindex="-1" role="dialog" aria-labelledby="ActualizarDatosCarreraLabel" aria-hidden="true">
                    
                      <div className="modal-content">
                        <Modal.Header className="modal-header" closeButton >
                          <h5 className="modal-title" id="ActualizarDatosCarreraLabel">Actualización de los datos de la Carrera ITI</h5>
                          
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                          <Form.Group className="modal-body">
                            <Form.Label for="Name">Nombre</Form.Label>
                            <Form.Control onChange={this.handleChangec}
                value={this.state.form2.nombrec} type="text" id="nombre" name="nombrec" required />
                            <br/>
                            <br/>
                            <Form.Label for="Nivel">Nivel</Form.Label>
                            <Form.Select onChange={this.handleChangec}
                value={this.state.form2.nivel} name="nivel" id="nivel" required>
                              <option value="ingenieria">Ingenieria</option>
                              <option value="M.I.">M.I.</option>
                            </Form.Select>
                            <br/>
                            <br/>
                            <label for="Director">Director</label>
                            <Form.Select onChange={this.handleChangec}
                value={this.state.form2.director} name="director" id="director" required>
                              
                              <option value="Mario Humberto Rodríguez Chávez">Mario Humberto Rodríguez Chávez</option>
                              <option value="Jorge Arturo Hernández Almanza">Jorge Arturo Hernández Almanza</option>
                            </Form.Select>
                          </Form.Group>
                        </Form>
                        </Modal.Body>
                        
                        <script>
                          $("#commentForm").validate();
                        </script>
                        <Modal.Footer className="modal-footer">
                          <Button onClick={() => this.editarc(this.state.form2)} type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                          <Button onClick={() => this.cerrarModalActualizar()}   type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                        </Modal.Footer>
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
                  <h4 className="card-title">Planes de Estudio</h4>
                </div>
                <div className="card-body table-responsive">
                  <div className="card-body table-responsive">
                    <Table className="table table-hover">
                      <thead className="text-primary">
                        <tr>
                          <th>clave</th>
                          <th>Nombre</th>
                          <th>Nivel</th>
                          <th>Año</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.data.map((dato) => (
                <tr >
                  <td>{dato.clave}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.Nivel}</td>
                  <td>{dato.anio}</td>
                  <td>
                          <Button onClick={() => this.mostrarModalEditar(dato)} type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#ActualizarDatosMateria">
                            <i className="material-icons">edit</i>
                          </Button>
                          <Button onClick={()=> this.mostrarModalVista(dato)} type="button" rel="tooltip" title="Vista Rápida" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#VistaRapida">
                            <i className="material-icons">preview</i>
                          </Button>
                        </td>
                    
                </tr>
              ))}
                      </tbody>
                    </Table>
    
                    
    
                    <Modal show={this.state.modalEditar} className="modal fade" id="ActualizarPlanEstudios" tabindex="-1" role="dialog" aria-labelledby="ActualizarPlanEstudiosLabel" aria-hidden="true">
                      
                        <div className="modal-content">
                          <Modal.Header className="modal-header">
                            <h5 className="modal-title" id="ActualizarPlanEstudiosLabel">Actualizar Plan de Estudios ITI-2018</h5>
                            <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </Modal.Header>
                          <Form>
                            <Modal.Body className="modal-body">
                              <Form.Label for="Name">Nombre</Form.Label>
                              <Form.Control onChange={this.handleChange}
                value={this.state.form.nombre}type="text" id="nombre" name="nombre" required />
                              <br/>
                              <br/>
                              <Form.Label  for="anio">Año</Form.Label>
                              <Form.Control onChange={this.handleChange}
                value={this.state.form.anio} type="text" id="anio" name="anio" required />
                              <br/>
                              <br/>
                              <label for="Nivel">Nivel</label>
                              <Form.Select onChange={this.handleChange}
                value={this.state.form.nivel} name="nivel" id="nivel" required>
                                <option value="Ingenieria">Ingenieria</option>
                                <option value="M.I.">M.I.</option>
                              </Form.Select>
                            </Modal.Body>
                          </Form>
                          <script>
                          $("#commentForm").validate();
                          </script>
                          <Modal.Footer className="modal-footer">
                            <Button  onClick={() => this.editar(this.state.form)}   type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                            <Button  onClick={() => this.cerrarModalEditar()}    type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                          </Modal.Footer>
                        </div>
                      
                    </Modal>
    
                    
                    <Modal show={this.state.modalVista}  className="modal fade" id="VistaRapida" tabindex="-1" role="dialog" aria-labelledby="VistaRapidaLabel" aria-hidden="true">
                      
                        <div className="modal-content">
                          <Modal.Header className="modal-header">
                            <h5 className="modal-title" id="VistaRapidaLabel">vista del Plan</h5>
                            <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </Modal.Header>
                          <Modal.Body className="modal-body">
                           
                         
                  <tr>
                        <td>Clave:</td>
                        <td>{this.state.form.clave}</td>
                      </tr>
                      <tr>
                        <td>Nombre:</td>{"  "}
                        <td>{this.state.form.nombre}</td>
                      </tr>
                      <tr>
                        <td>Nivel:</td>
                        <td>{this.state.form.Nivel}</td>
                      </tr>
                      <tr>
                        <td>Año:</td>
                        <td>{this.state.form.anio}</td>
                      </tr>
                      <tr>
                      
                      </tr>
                      
                 
               

                          </Modal.Body>
                          <Modal.Footer className="modal-footer">
                            <Button onClick={() => this.cerrarModalvista()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                          </Modal.Footer>
                        </div>
                     
                    </Modal>
    
                    
                    <Modal show={this.state.modalInsertar} backdrop="static"keyboard={false}    className="modal fade" id="AgregarNuevoPlan" tabindex="-1" role="dialog" aria-labelledby="AgregarNuevoPlanLabel" aria-hidden="true">
                      
                        <div className="modal-content">
                          <Modal.Header className="modal-header">
                            <h5 className="modal-title" id="AgregarNuevoPlanLabel">Agregar Nuevo Plan de Estudio</h5>
                            
                          </Modal.Header>
                          <Form>
                            <Modal.Body className="modal-body">
                              <Form.Group>
                                <Form.Label for="Clave">Clave</Form.Label>
                                <Form.Control type="text" id="clave" name="clave" onChange={this.handleChange} required />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label for="Name">Nombre</Form.Label>
                                <Form.Control type="text" id="nombre" name="nombre" onChange={this.handleChange} required />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label for="anio">Año</Form.Label>
                                <Form.Control type="text" id="anio" name="anio" onChange={this.handleChange} required />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label for="Nivel">Nivel </Form.Label>
                                <Form.Select name="nivel" id="nivel"  required>
                                  <option>Ingenieria</option>
                                  <option>M.I.</option>
                                </Form.Select>
                              </Form.Group>
                              
                        
                         
                            </Modal.Body>
                          </Form>
                          <script>
                          $("#commentForm").validate();
                          </script>
                          <Modal.Footer className="modal-footer">
                            <Button onClick={() => this.insertar()}  type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                            <Button onClick={() => this.cerrarModalInsertar()}  type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                          </Modal.Footer>
                        </div>
                      
                    </Modal>
                  </div>
                  <div className="card-footer">
                    <Button onClick={()=>this.mostrarModalInsertar()}   type="button" className="btn btn-primary" data-toggle="modal" data-bs-target="#AgregarNuevoPlan">Agregar</Button>
                  </div>                
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
                  <h4 className="card-title">Profesores Adscritos</h4>
                </div> 
                <div className="card-body table-responsive">
                  <Table className="table table-hover">
                    <thead className="text-primary">
                      <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.data1.map((dato1) => (
                <tr >
                  
                  <td>{dato1.nombrep}</td>
                  
                  <td>
                          <Button onClick={() => this.mostrarModalEditarp(dato1)} type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#ActualizarDatosMateria">
                            <i className="material-icons">edit</i>
                          </Button>
                          <Button onClick={()=> this.mostrarModalVista1(dato1)} type="button" rel="tooltip" title="Vista Rápida" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#VistaRapida">
                            <i className="material-icons">preview</i>
                          </Button>
                        </td>
                    
                </tr>
              ))}
                    </tbody>
                  </Table>
                  <Modal show={this.state.modalEditarp} className="modal fade" id="ActualizarPlanEstudios" tabindex="-1" role="dialog" aria-labelledby="ActualizarPlanEstudiosLabel" aria-hidden="true">
                      
                      <div className="modal-content">
                        <Modal.Header className="modal-header">
                          <h5 className="modal-title" id="ActualizarPlanEstudiosLabel">Actualizar Plan de Estudios ITI-2018</h5>
                          <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </Modal.Header>
                        <Form>
                          <Modal.Body className="modal-body">
                            <Form.Label htmlFor="nombrep">Nombre</Form.Label>
                            <Form.Control onChange={this.handleChangep}
                              value={this.state.form1.nombrep} type="text" id="nombrep" name="nombrep" required />
                          </Modal.Body>
                        </Form>
                        <script>
                        $("#commentForm").validate();
                        </script>
                        <Modal.Footer className="modal-footer">
                          <Button  onClick={() => this.editarp(this.state.form1)}   type="button" className="btn btn-primary" data-toggle="modal">Guardar</Button>
                          <Button  onClick={() => this.cerrarModalEditarp()}    type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                        </Modal.Footer>
                      </div>
                    
                  </Modal>
  
              
                  <Modal show={this.state.modalVista1}  className="modal fade" id="VistaRapida" tabindex="-1" role="dialog" aria-labelledby="VistaRapidaLabel" aria-hidden="true">
                    
                      <div className="modal-content">
                        <Modal.Header className="modal-header">
                          <h5 className="modal-title" id="VistaRapidaLabel">Mostrar Profesor</h5>
                          <button onClick={() => this.cerrarModalvista1()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </Modal.Header>
                        <Modal.Body className="modal-body">
                      
                      <tr>
                        <td>Nombre:</td>
                        <td>{this.state.form1.nombrep}</td>
                      </tr>
                     
                      
                      
                     
                      
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                          <Button onClick={() => this.cerrarModalvista1()}  type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                        </Modal.Footer>
                      </div>
                    
                  </Modal>
    
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
  <script src="./assets/js/core/popper.min.js"></script>
  <script src="./assets/js/core/bootstrap-material-design.min.js"></script>
  <script src="./assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <script src="./assets/js/plugins/moment.min.js"></script>
  <script src="./assets/js/plugins/sweetalert2.js"></script>
  <script src="./assets/js/plugins/jquery.validate.min.js"></script>
  <script src="./assets/js/plugins/jquery.bootstrap-wizard.js"></script>
  <script src="./assets/js/plugins/bootstrap-selectpicker.js"></script>
  <script src="./assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
  <script src="./assets/js/plugins/jquery.dataTables.min.js"></script>
  <script src="./assets/js/plugins/bootstrap-tagsinput.js"></script>
  <script src="./assets/js/plugins/jasny-bootstrap.min.js"></script>
  <script src="./assets/js/plugins/fullcalendar.min.js"></script>
  <script src="./assets/js/plugins/jquery-jvectormap.js"></script>
  <script src="./assets/js/plugins/nouislider.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
  <script src="./assets/js/plugins/arrive.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
  <script src="./assets/js/plugins/chartist.min.js"></script>
  <script src="./assets/js/plugins/bootstrap-notify.js"></script>
  <script src="./assets/js/material-dashboard.js?v=2.1.2" type="text/javascript"></script>
  <script src="./assets/demo/demo.js"></script>
  
    </body>
    </>
    
  );

  }
}


export default App;