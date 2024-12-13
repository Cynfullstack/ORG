import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Colaborador = (props) =>{

const {nombre,puesto,foto, equipo, id, fav} = props.datos;
const {colorPrimario, eliminarColaborador, like} = props;
    return <div className="colaborador">
        <IoIosCloseCircle className="eliminar" onClick={() =>eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ?<AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/>}
            {/*fav si eres verdadero muestrame el corazon rojo si no muestrame el corazon blanco*/}
           
            
        </div>

    </div>
}
export default Colaborador;