
import User from '../models/user.model.js'
import { ObjectId } from 'mongodb'

class UserService {
  constructor() {
    this.user = User
  }

  async GetAll() {

    const users = await this.user.find()
    if(!users){
        throw new Error("No users found")
    }
    return users

  }

  async GetById(id) {

    const users = await this.user.findOne({_id: new ObjectId(id)})
    if (!users){
        throw new Error("user not found")            

    }
    return users
  }

  async Create(user) {
    const newUser= await this.user.create(user)
    if(!newUser){
        throw new Error("failed to creat user")
    }
    return newUser

  }

  async Update(id, user) {
    const existingUser = await this. user.findOne({_id: new ObjectId(id)})
    if(!existingUser){
        throw new Error('user not found')
    }
    const updatedUser = await this. user.updateOne(
        {_id: new ObjectId(id)},
        {$set: user}
    )
    if (updatedUser.matchedCount==0){
        throw new Error('failed to update user')
    }
    if (updatedUser.modifiedCount==0){
        throw new Error('no changes made to user')
    }
     return updatedUser
  }

  async Delete(id) {
    const existingUser = await this.user.findOne({ _id: new ObjectId(id) });

    if (!existingUser) {
      throw new Error("user not found");
    }

    const deletedUser = await this.user.deleteOne({ _id: new ObjectId(id) });

    if (deletedUser.deletedCount === 0) {
      throw new Error("failed to delete user");
    }

    return deletedUser;
  }
}


export default new UserService()
