import { useParams } from "react-router-dom";

const Pokemons = () => {
    const navigate = useNavigate ()

    const irA = () => {
        navigate('/welcome')
    }


    return <div>
        <p>Name: {}</p>
        <p>Type: {}</p>
        <button className="btn btn-danger" onClick={irA}>Movernos</button>
    </div>
}

export default Pokemons;