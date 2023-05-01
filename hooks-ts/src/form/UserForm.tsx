import { useState } from 'react';
import { User } from './types';

interface Props {
  user: User;
  onUserChange: (updatedUser: User) => void;
}

const UserForm: React.FC<Props> = ({ user, onUserChange }) => {
  const [formData, setFormData] = useState(user);

  const handleInputChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLOptionElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const generateFormFields = (
    data: User,
    parentKey?: string,
  ): JSX.Element[] => {
    return Object.entries(data).map(([key, value]) => {
      const fieldName = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        return generateFormFields(value, fieldName);
      } else {
        return (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input
              type='text'
              name={fieldName}
              id={fieldName}
              value={formData[fieldName]}
              onChange={handleInputChange}
            />
            <option value=''></option>
          </div>
        );
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUserChange(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {generateFormFields(user)}
      <button type='submit'>Save</button>
    </form>
  );
};

export default UserForm;
