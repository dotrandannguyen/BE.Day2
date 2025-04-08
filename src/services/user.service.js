import DbHelper from '../helpers/DbHelper.js'

// Lấy tất cả người dùng
const GetAll = async () => {
    const db = await DbHelper.readDb()
    return db.User
}

// Lấy người dùng theo ID
const GetById = async (id) => {
    const db = await DbHelper.readDb()
    const index = db.User.findIndex((user) => user.id === id)
    if (index === -1) {
        throw new Error("Not Found")
    }
    return db.User[index]
}

// Tạo người dùng mới
const CreateUser = async (body) => {
    const db = await DbHelper.readDb()
    db.User.push(body)
    await DbHelper.writeDb(db)
    return body
}

// Cập nhật người dùng theo ID
const putUser = async (id, body) => {
    const db = await DbHelper.readDb()
    const index = db.User.findIndex((user) => user.id === id)
    if (index === -1) {
        throw new Error("Not Found")
    }
    db.User[index] = { ...db.User[index], ...body } // cập nhật thông tin mới
    await DbHelper.writeDb(db)
    return db.User[index]
}

// Xóa người dùng theo ID
const DeleteUser = async (id) => {
    const db = await DbHelper.readDb()
    const index = db.User.findIndex((user) => user.id === id)
    if (index === -1) {
        throw new Error("Not Found")
    }
    const deletedUser = db.User.splice(index, 1)
    await DbHelper.writeDb(db)
    return deletedUser[0]
}

export default {
    GetAll,
    GetById,
    CreateUser,
    putUser,
    DeleteUser
}
