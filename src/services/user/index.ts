import { getRepository } from "typeorm";
import { User } from "../../enities/user";
import { Profile } from "../../enities/profile";
import { Visit } from "../../enities/profile/visit";
import { Level } from "../../enities/profile/level";

export class UserService {
  public registerUser = async(user: User) => {
    const userRepository =  getRepository<User>(User);
    const profileRepository =  getRepository<Profile>(Profile);
    const visitRepository =  getRepository<Visit>(Visit);
    const levelRepository =  getRepository<Level>(Level);

    const visit = new Visit();
    await visitRepository.save(visit);

    const level = new Level();
    await levelRepository.save(level);

    const profile = new Profile();
    profile.visit = visit;
    profile.level = level;

    await profileRepository.save(profile);
  
    const newUser = new User();
    newUser.login = user.login;
    newUser.password = user.password;
    newUser.name = user.name;
    newUser.profile = profile;

    return await userRepository.save(newUser);
  };

  public checkUserLogin = async(login) => {
    return await User.findOneBy({ login });
  };

  public getUserById = async(id) => {
    const userRepository =  getRepository<User>(User);
    return await userRepository.findOneBy({id});
  };
}