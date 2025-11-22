import Track from "../models/songs.model.js";

const trackController = {
    fetchAll: async (req, res) => {
        try {
            const list = await Track.find();
            return res.status(200).json(list);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    addOne: async (req, res) => {
        const { name, performer, releaseYear, category } = req.body;
        const payload = { name, performer, releaseYear, category };

        try {
            const created = await Track.create(payload);
            res.status(201).json(created);
        } catch (err) {
            const formattedErrors = {};

            if (err.name === "ValidationError") {
                for (const field in err.errors) {
                    formattedErrors[field] = err.errors[field].message;
                }
            }

            return res.status(400).json({ issues: formattedErrors });
        }
    },

    fetchOne: async (req, res) => {
        const itemId = req.params.id;

        try {
            const doc = await Track.findById(itemId);
            if (!doc) {
                return res.status(404).json({ message: "No existe un registro con ese ID" });
            }
            res.status(200).json(doc);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    removeOne: async (req, res) => {
        const itemId = req.params.id;

        try {
            const removed = await Track.findByIdAndDelete(itemId);

            if (!removed) {
                return res.status(404).json({ message: "No existe un registro con ese ID" });
            }

            res.status(200).json({ message: "La canción fue eliminada correctamente" });
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    modifyOne: async (req, res) => {
        const itemId = req.params.id;
        const { name, performer, releaseYear, category } = req.body;

        const changes = {};

        if (name) changes.name = name;
        if (performer) changes.performer = performer;
        if (releaseYear) changes.releaseYear = releaseYear;
        if (category) changes.category = category;

        try {
            const updated = await Track.findByIdAndUpdate(
                itemId,
                changes,
                { new: true, runValidators: true }
            );

            if (!updated) {
                return res.status(404).json({ message: "No existe un registro con ese ID" });
            }

            res.status(200).json(updated);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
};

export default trackController;
