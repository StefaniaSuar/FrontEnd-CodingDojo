import {useState} from "react";
import styles from "./../css/NoteForms.module.css"

const NoteForms = ({listnotes, setlistNotes}) => {
    const [note,setNote] = useState ('')
    const [priority,setPriority] = useState ('')
    
    const agregarNota = (e) => {
        e.preventDefault()
        setlistNotes ([...listnotes, {note,priority}])
    }

    return (

        <div>
            <form onSubmit={(e) => agregarNota(e)}>
                <div>
                    <input type="text" className="input-group-text mb-1"  name="note" placeholder="Escribe tu nota" id={styles.note} value={note} onChange={ e => setNote (e.target.value) }/>
                </div>
                <div>
                    <select className= " form-select mb-3" name="priority" id={styles.priority} value={priority} onChange={ e => setPriority (e.target.value) }>
                        <option value= '---'>---</option>    
                        <option value= 'Alta'>Alta</option>
                        <option value= 'Baja'>Baja</option>
                        <option value= 'Media'>Media</option>
                    </select>
                </div>
                <div>
                    <button className={`btn btn-primary ${styles.btn}`}>Agregar nota</button> 
                </div>
            </form>
        </div>
    )
}

export default NoteForms;