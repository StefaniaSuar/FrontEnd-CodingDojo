    import { useState } from "react";

    const FormSups = () => {
    return (
        <form>
        <div className="mb-3">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
        </div>

        <div className="mb-3">
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" />
        </div>

        <div className="mb-3">
            <label htmlFor="linkImg">Img link:</label>
            <input type="text" name="linkImg" id="linkImg" />
        </div>

        <div>
            <button type="button" className="btn btn-success">
            Agregar super
            </button>
        </div>
        </form>
    );
    };

    export default FormSups;
