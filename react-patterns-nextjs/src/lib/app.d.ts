declare interface AppProps {
  children?: React.ReactNode;
  childrenElement: React.JSX.Element;
  style?: React.CSSProperties;
  onChange: React.FormEventHandler<HTMLElement>;
}

type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type setStateProps<T> = {
  setState: React.Dispatch<React.SetStateAction<T>>;
  children?: React.ReactNode;
};
