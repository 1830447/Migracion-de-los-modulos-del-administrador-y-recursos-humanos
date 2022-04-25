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
  {id:1,email: "spolanco@upv.edu.mx", nombre :"Said Polanco Martagón",tipo:"Profesor", activo: "Si" },
  {id:2,email: "corozco@upv.edu.mx", nombre:"Carlos Orozco García", tipo:"Director" ,activo:"Si"},
  {id:3,email: "mortiza@upv.edu.mx", nombre: "Maria Rangel Ortiz Alvarez",tipo:"Profesor", activo: "No"},
];

  
class App extends React.Component {
  state = {
    data: data,
    modalInsertar: false,
    modalEditar: false,
    modalVista: false,
    form: {
      id:"",
      email: "",
      nombre: "",
      tipo: "",
      activo: "",
    },
  };
  

  mostrarModalEditar = (dato) => {
    this.setState({
      form: dato,
      modalEditar: true,
    });
  };
  mostrarModalVista = (dato) => {
    this.setState({ form: dato, modalVista: true });
  };
  cerrarModalVista = () => {
    this.setState({ modalVista: false });
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
        arreglo[contador].email = dato.email;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].tipo = dato.tipo;
        arreglo[contador].activo = dato.activo;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalEditar: false });
  };
  vista = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].email = dato.email;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].tipo = dato.tipo;
        arreglo[contador].activo = dato.activo;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalVista: true });
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
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Lista de Usuarios</h4>
            </div> 
            <div className="card-body table-responsive">
              <Table className="table table-hover">
                <thead className="text-primary">
                  <tr>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Activo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.data.map((dato) => (
                <tr >
                  <td>{dato.email}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.tipo}</td>
                  <td>{dato.activo}</td>
                  <td>
                  <Button onClick={() => this.mostrarModalEditar(dato)} type="button" rel="tooltip" title="Editar" className="btn btn-primary btn-link" data-toggle="modal" data-target="#EditarUsuario">
                        <i className="material-icons">edit</i>
                      </Button>
                      
                      <Button onClick={() => this.mostrarModalVista(dato)} type="button" rel="tooltip" title="Vista Rápida" className="btn btn-primary btn-link" data-toggle="modal" data-target="#VistaRapida">
                        <i className="material-icons">preview</i>
                      </Button>
                   
                  </td>
                </tr>
              ))}
                </tbody>
              </Table>

              
              <Modal show={this.state.modalVista} className="modal fade" id="VistaRapida" tabindex="-1" role="dialog" aria-labelledby="VistaRapidaLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="VistaRapidaLabel">Vista</h5>
                      <nutton onClick={() => this.cerrarModalVista()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </nutton>
                    </div>
                    <div className="modal-body">
                      <tr>
                        <td>Email:  </td>{" "}
                        <td>{this.state.form.email}</td>
                      </tr>
                      <br/>
                      <br/>
                      <tr>
                        <td>nombre:</td>
                        <td>{this.state.form.nombre}</td>
                      </tr>
                      <br/>
                      <br/>
                      <tr>
                        <td>Tipo:  </td>{" "}
                        <td>{this.state.form.tipo}</td>
                      </tr>
                      <br/>
                      <br/>
                      <tr>
                        <td>Activo  </td>{" "}
                        <td>{this.state.form.activo}</td>
                      </tr>
                      <br/>
                      <br/>
                     
                    </div>
                    <div className="modal-footer">
                      
                      <Button onClick={() => this.cerrarModalVista()} type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</Button>
                    </div>
                  </div>
                </div>
              </Modal>

              
              <Modal show={this.state.modalEditar} className="modal fade" id="EditarUsuario" tabindex="-1" role="dialog" aria-labelledby="EditarUsuarioLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="EditarUsuarioLabel">Actualizar Usuario</h5>
                      <button onClick={() => this.cerrarModalEditar()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <label for="Clave">Email</label>
                      <Form.Control onChange={this.handleChange}
                value={this.state.form.email} type="email" id="email" name="email" required/>
                      <br/>
                      <br/>
                      <label for="Name">Nombre</label>
                      <Form.Control onChange={this.handleChange}
                value={this.state.form.nombre} type="text" id="nombre" name="nombre"/>
                      <br/>
                      <br/>
                      <label for=" ">Tipo</label>
                      <Form.Select value={this.state.form.tipo}  onChange={this.handleChange}
                type="text" id="tipo" name="tipo">
                      <option value="profesor">Profesor</option>
                      <option value="director">Director</option>
                      </Form.Select>
                      <br/>
                      <br/>
                      <label for=" ">Activo</label>
                      <Form.Select value={this.state.form.activo} onChange={this.handleChange}
                 name="activo">
                        <option value="si">Si</option>
                        <option value="no">No</option>
                      </Form.Select>
                    </div>
                    <div className="modal-footer">
                      <Button onClick={() => this.editar(this.state.form)} type="button" className="btn btn-primary" data-toggle="modal">Actualizar</Button>
                      <Button onClick={() => this.cerrarModalEditar()}  type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </Modal>

              
              <Modal show={this.state.modalInsertar} className="modal fade" id="AgregarUsuario" tabindex="-1" role="dialog" aria-labelledby="AgregarUsuarioLabel" aria-hidden="true">
                <div className="dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="AgregarUsuarioLabel">Agregar Usuario</h5>
                      <button onClick={() => this.cerrarModalInsertar()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <label for="Clave">Email</label>
                      <Form.Control onChange={this.handleChange} type="text" id="email" name="email"/>
                      <br/>
                      <br/>
                      <label for="Name">Nombre</label>
                      <Form.Control onChange={this.handleChange} type="text" id="nombre" name="nombre"/>
                      <br/>
                      <br/>
                      <label for=" ">Tipo</label>
                      <Form.Select onChange={this.handleChange} type="text" id="tipo" name="tipo">
                        <option>director</option>
                        <option>profesor</option>
                      </Form.Select>
                      <br/>
                      <br/>
                      <label for=" ">Activo</label>
                      <Form.Select onChange={this.handleChange} type="text" id="activo" name="activo">
                        <option>si</option>
                        <option>no</option>
                      </Form.Select>
                      <br/>
                      <br/>
                      
                    </div>
                    <div className="modal-footer">
                      <Button onClick={() => this.insertar()}  type="button" className="btn btn-primary" data-toggle="modal">Agregar</Button>
                      <Button onClick={() => this.cerrarModalInsertar()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                    </div>
                  </div>
                </div>
              </Modal>

            </div> 
            <div className="card-footer">
              <Button onClick={()=>this.mostrarModalInsertar()} type="button" className="btn btn-primary" data-toggle="modal" data-target="#AgregarUsuario">Agregar Usuario</Button>
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
