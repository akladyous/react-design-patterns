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

const getUser = async (userId) => {
  return new Promise((resolve, reject) => {
    if (!userId) reject(new Error('missing UserID'));
    setTimeout(() => {
      const user = usersData.find((u) => u.id == userId);
      if (!user) reject(-1);
      resolve(user);
    }, 500);
  });
};
