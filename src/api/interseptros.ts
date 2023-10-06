import { useEffect } from 'react';
import { axiosInstance } from './axios';
import Toast from 'react-native-toast-message';

export const AxiosInterceptors = () => {
  useEffect(() => {
    const axiosResponseInterceptor = axiosInstance.interceptors.response.use(null, () => {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please, try a little bit later',
      });
    });

    return () => {
      axiosInstance.interceptors.response.eject(axiosResponseInterceptor);
    };
  }, []);

  return null;
};
