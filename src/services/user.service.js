import DbHelper from '../helpers/DbHelper.js'

// Lấy tất cả người dùng
const GetAll = async() => {
    const userList = await mongoDB.collection("users").find().toArray();
    console.log(userList);
    return userList;
    
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
import db from '../database/mongodb.js'

const mongoDB = await db.getDB();  
const GetAll = async() => {
    const userList = await mongoDB.collection("users").find().toArray();
    return userList;
}

const GetById = async(id) => {



    const userList= await mongoDB.collection("users").findOne({id:id});
    if (!userList) {
        throw new Error("Not Found")
    }
    return userList;
}

const Insert= async (userData) => {



    const lastUser= await mongoDB.collection("users").find().sort({id: -1}).limit(1).toArray();
    const maxID= lastUser.length===1 ? lastUser[0].id+1 : 1;
    const newUser= {...userData, id: maxID};
    const updateList= await mongoDB.collection("users").insertOne(newUser);
    return newUser
}

const Delete= async (id) => {

    const user= await mongoDB.collection("users").findOne({id: id});
    if (!user) throw new Error("User not found");
    const deleteResult = await mongoDB.collection("users").deleteOne({id: id});
    if (deleteResult.deletedCount ===0){
        throw new Error("Failed to delete user")
    }
    return {Success: "Success", id: id};
}


const Update= async (userData, id) =>{

    const newData= {...userData};
    const updatedUser= await mongoDB.collection("users").updateOne({id: id}, {$set: newData} );
    if (updatedUser.matchedCount === 0){
        throw new Error("Not found");
    }
    return await GetById(id);
}

            


