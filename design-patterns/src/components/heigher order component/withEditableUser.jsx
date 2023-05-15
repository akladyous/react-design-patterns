import { generateFakeUsers } from '@/lib/fakeUsers';
import { useEffect, useState } from 'react';

export const withEditableUser = (Wrapper, user_id) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(undefined);
    const [user, setUser] = useState(undefined);

    console.log(prova);
    useEffect(() => {
      if (!user_id) return null;
      (async () => {
        const users = await generateFakeUsers();
        const user = users.find((u) => (u.id = user_id));
        setUser(user);
        setOriginalUser(user);
      })();
    }, [user_id]);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await fetch(`https://endpoint.com/users${user_id}`, {
        method: 'post',
      });
      if (response.ok) {
        const data = await response.data;
        setOriginalUser(response.data);
        setUser(data);
      }
    };

    const resetUser = () => {
      setUser(originalUser);
    };

    return user ? (
      <Wrapper
        {...props}
        user={user}
        onChange={onChangeUser}
        onSave={onSaveUser}
        resetUser={resetUser}
      />
    ) : null;
  };
};
