export const ValidateUserId = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id) || id <= 0) {
            throw new Error("ID invalid");
        }
        next();
    } catch (error) {
        next(error);
    }
};
