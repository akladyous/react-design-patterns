import { useEffect, useState } from 'react';
import { generateFakeUsers } from '../../../../lib/fakeUsers';

export default function withEditableUser(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = 'http://localhost:3000/users';

    useEffect(() => {
      const controller = new AbortController();

      const fetchData = async () => {
        if (!userId) {
          return void 1;
        }
        setLoading(true);
        try {
          const response = await fetch(`${url}/${userId}`, {
            signal: controller.signal,
          });
          if (!response.ok) {
            setError('Error Fetching data');
          } else {
            const data = await response.json();
            setUser(data);
            setOriginalUser(data);
          }
        } catch (error) {
          if (!error.name === 'AbortError') {
            setError(error.message);
          }
        } finally {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
      };

      fetchData();
      return () => {
        controller.abort();
      };

      fetchData();
    }, [userId]);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const controller = new AbortController();
      setLoading(true);
      debugger;
      try {
        const response = await fetch(`${url}/${userId}`, {
          signal: controller.signal,
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        if (!response.ok) {
          setError('Error Fetching data');
        } else {
          const data = await response.json();
          setUser(data);
          setOriginalUser(data);
        }
      } catch (error) {
        if (!error.name === 'AbortError') {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    const onResetUser = () => {
      setUser(originalUser);
    };
    return (
      <Component
        user={user}
        isLoading={loading}
        error={error}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
        {...props}
      />
    );
  };
}
