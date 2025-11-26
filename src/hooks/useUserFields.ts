import { useState } from 'react';

export default function useUserFields() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
  });
  const [userInput, setUserInput] = useState({ email: '', name: '' });
  const [saveInput, setSaveInput] = useState(false);

  //for users
  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  function takeUsers() {
    if (userInfo.email !== '' && userInfo.name !== '') {
      setUserInput({
        email: userInfo.email.trim(),
        name: userInfo.name.trim(),
      });
      setUserInfo({ email: '', name: '' });
      setSaveInput(true);
    }
  }

  const handleUser = (e: React.FormEvent) => {
    e.preventDefault();

    takeUsers();
  };

  return {
    userInfo,
    userInput,
    saveInput,
    setSaveInput,
    setUserInput,
    takeUsers,
    handleUserInfoChange,
    handleUser,
  };
}
