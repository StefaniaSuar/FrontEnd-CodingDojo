import {useState} from "react";
import styles from "./../css/NoteForms.module.css"

const NoteForms = ({listnotes, setlistNotes}) => {
    const [note,setNote] = useState ('')
    const [priority,setPriority] = useState ('')
    const [errores,setErrores] = useState ({note: '',priority:''})

    const agregarNota = (e) => {
        e.preventDefault()

        const erroresCopia = {...errores}
        !note? erroresCopia.note = "ingrese un valor " : erroresCopia.note= '';
        !priority? erroresCopia.priority= "ingrese un valor" : erroresCopia.priority= '';

        if (!note || !priority){
            setErrores(erroresCopia)
            return;
        }
        setlistNotes ([...listnotes, {note,priority}])
        setNote('')
        setPriority('')
        setErrores({note:'', priority:''})
    }

    return (

        <div>
            <form onSubmit={(e) => agregarNota(e)}>
                <div>
                    <input type="text" className="input-group-text mb-1"  name="note" placeholder="Escribe tu nota" id={styles.note} value={note} onChange={ e => setNote (e.target.value) }/>
                    {errores.note && <p style={{ color: "red" }}>{errores.note}</p>}
                </div>
                <div>
                    <select className= " form-select mb-3" name="priority" id={styles.priority} value={priority} onChange={ e => setPriority (e.target.value) }>
                        <option value= '---'>---</option>    
                        <option value= 'Alta'>Alta</option>
                        <option value= 'Baja'>Baja</option>
                        <option value= 'Media'>Media</option>
                    </select>
                    {errores.priority && <p style={{ color: "red" }}>{errores.priority}</p>}
                </div>
                <div>
                    <button className={`btn btn-primary ${styles.btn}`}>Agregar nota</button> 
                </div>
            </form>
        </div>
    )
}

export default NoteForms;