import userService from "../services/user.service.js"

const GetAll = async (req, res, next) => {
    try {
        const users = await userService.GetAll();
        return res.status(200).json({ data: users });
    } catch (error) {
        next(error);
    }
};

// ... (GetById, postUser, putUser, deleteUser tương tự như bạn viết)
