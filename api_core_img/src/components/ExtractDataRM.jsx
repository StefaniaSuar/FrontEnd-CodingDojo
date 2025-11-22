const ExtractDataRM = ({ setList }) => {

    const getRandomImage = async () => {
        const randomId = Math.floor(Math.random() * 826) + 1; 
        const URL = `https://rickandmortyapi.com/api/character/${randomId}`;

        const response = await fetch(URL);
        const data = await response.json();
        setList([data]);
    };

    return (
        <div>
            <button  onClick={getRandomImage}>Mostrar Imagen Aleatoria</button>
        </div>
    );
};

export default ExtractDataRM;
