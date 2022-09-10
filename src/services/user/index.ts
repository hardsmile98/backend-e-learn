import { User } from "../../enities/user";

export class UserService {
    public getUsers = async() => {
        const users = await User.find();
        return users;
    }

    public registerUser = async(user: User) => {
        const newUser = await User.save(user);
        return newUser;
    }

    public checkUserLogin = async(login) => {
        const user = await User.findOneBy({ login });
        return user;
    }
}