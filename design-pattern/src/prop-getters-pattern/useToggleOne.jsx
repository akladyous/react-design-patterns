import { useCallback, useMemo, useState } from 'react';

export default function useToggle() {
  const [isToggle, setStateToggle] = useState(false);
  const toggle = useCallback(
    () => setStateToggle((prevValue) => !prevValue),
    [],
  );
  //look here 👇 this object
  const togglerProps = useMemo(
    () => ({
      is_on: `${isToggle}`,
      onClick: toggle,
    }),
    [toggle, isToggle],
  );

  const values = useMemo(
    () => ({ isToggle, toggle, togglerProps }),
    [isToggle, toggle, togglerProps],
  );
  return values;
}
