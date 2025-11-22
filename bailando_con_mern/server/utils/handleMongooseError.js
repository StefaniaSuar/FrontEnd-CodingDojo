export function handleMongooseError(res, err) {
    if (err.name === "ValidationError") {
        const errors = {};
        for (const k in err.errors) errors[k] = err.errors[k].message;
        return res.status(400).json({ errors });
    }
    return res.status(500).json({ message: "Server error" });
}
