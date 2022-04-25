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
  {id:1,clave: "ITI", nombre :"Ingeniería en Tecnologías de la Información",nivel:"Ingeniería", director: "Mario Humberto Rodríguez Chávez" },
  {id:2,clave: "ITI", nombre:"Ingeniería en Tecnologías de la Información", nivel:"Ingeniería" ,director:"Carlos Orozco Gardía"},
  {id:3,clave: "MI", nombre: "Maestría en Ingeniería",nivel:"M.I.", director: "Erique Rocha Rangel"},
];

  
class App extends React.Component {
  state = {
    data: data,
    modalInsertar: false,
    modalEditar: false,
    form: {
      id:"",
      clave: "",
      nombre: "",
      nivel: "",
      director: "",
    },
  };
  

  mostrarModalEditar = (dato) => {
    this.setState({
      form: dato,
      modalEditar: true,
    });
  };
  cerrarModalEditar = () => {
    this.setState({ modalEditar: false });
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
        arreglo[contador].nivel = dato.nivel;
        arreglo[contador].director = dato.director;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalEditar: false });
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
      
      <div class="content">
        <div class="container-fluid">

          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Lista de Carreras</h4>
                </div> 
                <div class="card-body table-responsive">
                  <Table class="table table-hover">
                    <thead class="text-primary">
                      <tr>
                        <th>Nombre Corto</th>
                        <th>Nombre</th>
                        <th>Nivel</th>
                        <th>Director</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((dato) => (
                        <tr >
                          <td>{dato.clave}</td>
                          <td>{dato.nombre}</td>
                          <td>{dato.nivel}</td>
                          <td>{dato.director}</td>
                          <td>
                          <Button onClick={() => this.mostrarModalEditar(dato)}  type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-bs-target="#ActualizarPlanEstudios">
                            <i className="material-icons">edit</i>
                          </Button>
                          
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  
                  <Modal show={this.state.modalInsertar}  class="modal fade" id="AgregarNuevaCarrera" tabindex="-1" role="dialog" aria-labelledby="AgregarNuevaCarreraLabel" aria-hidden="true">
                  
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="AgregarNuevaCarreraLabel">Agregar Nueva Carrera</h5>
                          <button onClick={() => this.cerrarModalInsertar()} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form>
                          <div class="modal-body">
                            <label for="Clave">Clave</label>
                            <input type="text" id="clave" name="clave" onChange={this.handleChange} required />
                            <br/>
                            <br/>
                            <label for="Name">Nombre</label>
                            <input type="text" id="nombre" name="nombre" onChange={this.handleChange} required />
                            <br/>
                            <br/>
                            <label for=" ">Nivel</label>
                            <Form.Select  value={this.state.form.nivel} onChange={this.handleChange} name="nivel" required>
                              <option value="Ingenieria">Ingeniería</option>
                              <option value="M.I.">M.I.</option>
                            </Form.Select>
                            <br/>
                            <br/>
                            <label for=" ">Director</label>
                            <Form.Select  value={this.state.form.director} onChange={this.handleChange} name="director" required>
                              <option value="Mario Humberto Rodríguez Chávez">Mario Humberto Rodríguez Chávez</option>
                              <option value="Carlos Orozco Gardía">Carlos Orozco Gardía</option>
                              <option value="Erique Rocha Rangel">Erique Rocha Rangel</option>
                            </Form.Select>
                          </div>
                        </form>
                        <script>
                          $("#commentForm").validate();
                        </script>
                        <div class="modal-footer">
                          <button onClick={() => this.insertar()} type="button" class="btn btn-primary" data-toggle="modal">Agregar</button>
                          <button onClick={() => this.cerrarModalInsertar()}  type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        
                      </div>
                    </div>
                  </Modal>

              
                  <Modal show={this.state.modalEditar} class="modal fade" id="EditarCarrera" tabindex="-1" role="dialog" aria-labelledby="EditarCarreraLabel" aria-hidden="true">
                  
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="EditarCarreraLabel">Actualizar Carrera</h5>
                          <button onClick={() => this.cerrarModalEditar()} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form>
                          <div class="modal-body">
                            <label for="Clave">Clave</label>
                            <input onChange={this.handleChange}
                value={this.state.form.clave} type="text" id="clave" name="clave" required />
                            <br/>
                            <br/>
                            <label for="Name">Nombre</label>
                            <input onChange={this.handleChange}
                value={this.state.form.nombre} type="text" id="nombre" name="nombre" required />
                            <br/>
                            <br/>
                            <label for=" ">Nivel</label>
                            <Form.Select  value={this.state.form.nivel} onChange={this.handleChange} name="nivel" required>
                              <option value="Ingenieria">Ingeniería</option>
                              <option value="M.I.">M.I.</option>
                            </Form.Select>
                            <br/>
                            <br/>
                            <label for=" ">Director</label>
                            <Form.Select  value={this.state.form.director} onChange={this.handleChange} name="director" required>
                              <option value="Mario Humberto Rodríguez Chávez">Mario Humberto Rodríguez Chávez</option>
                              <option value="Carlos Orozco Gardía">Carlos Orozco Gardía</option>
                              <option value="Erique Rocha Rangel">Erique Rocha Rangel</option>
                            </Form.Select>
                          </div>
                        </form>
                        <script>
                          $("#commentForm").validate();
                        </script>
                        <div class="modal-footer">
                          <button  onClick={() => this.editar(this.state.form)}type="button" class="btn btn-primary" data-toggle="modal">Actualizar</button>
                          <button onClick={() => this.cerrarModalEditar()} type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        </div>
                   
                    </div>
                  </Modal>

                </div> 
                <div class="card-footer">
                  <button onClick={()=>this.mostrarModalInsertar()} type="button" class="btn btn-primary" data-toggle="modal" data-target="#AgregarNuevaCarrera">Agregar Carrera</button>
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
