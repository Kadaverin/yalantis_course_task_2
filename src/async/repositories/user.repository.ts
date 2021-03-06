import { usersIdsGenerator, getStubRandTimeInMs } from './../utils';

import { UserDto, UserCreationDto, BulkUserDto } from './../dto/index';
import { User, Group } from './../entities/index';


export class UserRepository {
  static create(userInfo: UserCreationDto ): Promise<User> {
    return new Promise<User>( resolve => {
      const user = {
        ...userInfo,
        id: usersIdsGenerator.next().value,
      };
    
      setTimeout(() => resolve(user), getStubRandTimeInMs());
    });
  }

  static addUserToGroup(user: UserDto, group: Group): Promise<User> {
    return new Promise( resolve => {
      const userWithGroup = {
        ...user,
        groupId: group.id,
      };

      setTimeout( () => resolve(userWithGroup), getStubRandTimeInMs());
    })
  }

  static bulkAddUsersToGroup(users: Array<BulkUserDto>, group: Group): Promise<User[]> {
    const promises = users.map( async user => {
      if(!user.id){
        user = await this.create(user);
      }

      return this.addUserToGroup(user as UserDto, group);
    })

    return Promise.all(promises);
  }
}
