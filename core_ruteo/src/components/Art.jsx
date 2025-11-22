import {useNavigate, useParams} from 'react-router-dom'

const Art = ({listagaleria}) => {
    const params = useParams();
    const idParams = Number(params.id)
    const navigate = useNavigate();

    const artPiece  = listagaleria.find((art,index) => index ===idParams)



    return(
    <>
        <h1>{artPiece .name}</h1>
        <br/>
        <img src={artPiece .img} alt={artPiece .name}/>
        <div>
            <button onClick={() => navigate(`/art/${idParams - 1}`)} className='btn btn-success mx-2' disabled={idParams===0}>Anterior</button>
            <button onClick={() => navigate('/home')} className='btn btn-success mx-2'>Inicio</button>
            <button onClick={()=> navigate(`/art/${idParams + 1}`)}  className='btn btn-success mx-2' disabled={idParams===(listagaleria.length -1)} >Siguiente</button>
        </div>
    </>
    )
}

export default Art;