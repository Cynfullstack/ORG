import {useState} from 'react';
import {v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

// ternario --> condicion ? seMuestraSiEsTrue : seMuestraSiEsFalse
//{mostrarformulario === true ? <Formulario/> : <div></div>} si mostrarformulario es true muestra el formulario, si no muestra un div vacio
// condicion && seMuestraSiEsTrue, si la condicion es verdadera se muestra lo que esta despues del &&
function App() {
  const [mostrarformulario,actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "data:image/jpeg;base64,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",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#FOF8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
    ])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarformulario);
  }

  //registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador",colaborador);
    //spread operator, toma o copia los valores actuales de colaboradores y despues agrega el nuevo colaborador
    actualizarColaboradores([...colaboradores,colaborador]);
  }
  // Eliminar colaborador

  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
    
  }
  //actualizar color de equipos

  const actualizarColor = (color, id) =>{
    console.log("Actualizar :",color,id);
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
         equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }
  // crear equipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log("nuevoEquipo")
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}]);

  }


  const like = (id)=>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados);
  }
 
  return (
    <div>
      
      <Header/>
      
      {/*mostrarformulario === true ? <Formulario/> : <div></div>*/}
      {/*mostrarformulario ? <Formulario/> : <></>*/}
      {mostrarformulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }
     
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      
      {
        equipos.map((equipo) =>
          <Equipo
         datos = {equipo} 
         key={equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}//filter crea un nuevo arreglo con los elementos que cumplan la condicion
         // filtra cada colaborador por el equipo al que pertenece, me regresa unicamente los colaboradores que pertenecen al equipo actual
         //al equipo que actualmente se esta recorriendo y que ingrse en el formulario
         eliminarColaborador = {eliminarColaborador}
         actualizarColor = {actualizarColor}
          like = {like}
         />  
        )
      } 
     <Footer/>
      
    </div>
  );
}

export default App;