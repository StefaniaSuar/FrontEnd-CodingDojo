import { mongoose } from "mongoose";

const trackSchema = mongoose.Schema(
    {
        name: {
            type: String,
            minlength: [6, "El nombre debe tener al menos 6 caracteres"],
            maxlength: [255, "El nombre es demasiado extenso"],
            required: [true, "El nombre de la canción es obligatorio"]
        },
        performer: {
            type: String,
            minlength: [10, "El artista debe tener mínimo 10 caracteres"],
            maxlength: [255, "Nombre del artista demasiado largo"],
            required: [true, "Debes indicar quién interpreta la canción"]
        },
        releaseYear: {
            type: Number,
            required: [true, "Indicar el año de lanzamiento es obligatorio"],
            min: [1900, "Ese año es demasiado antiguo para ser válido"],
            max: [2025, "El año no puede superar el actual"]
        },
        category: {
            type: String,
            required: [true, "Debes especificar un género musical"]
        }
    },
    { timestamps: true }
);

const Track = mongoose.model("tracks", trackSchema);

export default Track;
