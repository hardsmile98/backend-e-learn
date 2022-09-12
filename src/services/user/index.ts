import { User } from "../../enities/user";
import { Profile } from "../../enities/profile";
import { Visit } from "../../enities/profile/visit";
import { Level } from "../../enities/profile/level";

export class UserService {
  public registerUser = async(user: User) => {
    const visit = new Visit();
    await Visit.save(visit);

    const level = new Level();
    await Level.save(level);

    const profile = new Profile();
    profile.visit = visit;
    profile.level = level;

    await Profile.save(profile);
  
    const newUser = new User();
    newUser.login = user.login;
    newUser.password = user.password;
    newUser.name = user.name;
    newUser.profile = profile;

    return await User.save(newUser);
  };

  public checkUserLogin = async(login: string) => {
    return await User.findOneBy({ login });
  };

  public getUserById = async(id) => {
    return await User.findOneBy({id});
  };

  public updateDate = async({ date, profileId }) => {
    return await Profile.update(profileId, {
      updatedDate: date,
      isBonusEarned: false,
    });
  };
  
  public getVisit = async(visitId) => {
    return await Visit.findOneBy({visitId});
  };

  public updateVisit = async({ visitId, newVisit }) => {
    return await Visit.update(visitId, newVisit);
  };

  public updateBalance = async({ coins, profileId }) => {
    return await Profile.update(profileId, {
      balance: coins,
      isBonusEarned: true 
    });
  };
}