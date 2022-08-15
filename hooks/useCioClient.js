import { useEffect, useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { apiKey } from '../utils/constants';

const useCioClient = () => {
  const [cioClient, setCioClient] = useState(null);

  useEffect(() => {
    setCioClient(new ConstructorIOClient({
      apiKey,
    }));
  }, []);

  return cioClient;
};

export default useCioClient;
