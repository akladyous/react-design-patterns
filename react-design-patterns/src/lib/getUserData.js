import { usersData } from '../data/users';

export const getUserData = async (user_id) => {
  return new Promise((resolve, reject) => {
    if (!user_id) reject(undefined);
    return setTimeout(() => {
      const user = usersData.find((user) => user.id == user_id);
      if (!user) reject(undefined);
      resolve(user);
    }, 500);
  });
};
