import {useState} from "react";
import "./MiOrg.css";


const MiOrg = (props) => {
      // Estado hoocks
      //useState> usa el estado de un componente funcional
      
      // const [nombreVariable, funcionQueModificaNombreVariable] = useState(valorInicial);
       
 

      //const [mostrar,actualizarMostrar] = useState("Matias");
      
      //const manejarClick = (  ) =>{
        //console.log("mostar/ocultarelemento");
       // actualizarMostrar(!mostrar)
      //}

      const manejarClick = () =>{
       console.log("mostrar/ocultar elemento");
      }

    return <section className="orgSection">
              <h3 className="title">Mi organización</h3>
              <img src="/img/boton.png" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg;