import { useState, useEffect } from 'react';

export type UserAddress = {
  street: string;
  suite: string;
  city: string;
}

export type UserData = {
  id: number,
  name: string,
  address: UserAddress
}

export type Users = Array<UserData>

const useUsers = () => {
  const [data, setData] = useState<Users | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const result: Users = await response.json();
        setData(result);
    
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    setData(null);
  }, []);

  return { data, isLoading, error };
}

export default useUsers;
