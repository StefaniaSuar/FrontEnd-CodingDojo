import styles from "./../css/Note.module.css";

const Note = ({ note, priority, listnotes, setlistNotes, index}) => {
    const borrarNota = () => {

        setlistNotes(listnotes.filter((note,i) => i!=index))

    }
  return (
    <div className={`border bg-light ${styles.noteCard}`}>
      <p>
        {note} -{" "}
        <span
          className={
            priority === "Alta"
              ? styles.alta
              : priority === "Media"
              ? styles.media
              : priority === "Baja"
              ? styles.baja
              : ""
          }
        >
          {priority}
        </span>
      </p>
      <button className="btn btn-danger" onClick={borrarNota}>Delete</button>
    </div>
  );
};

export default Note;
