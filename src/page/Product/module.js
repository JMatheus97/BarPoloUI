import { toast } from 'react-toastify';
import axios from '../../services/axios';

export const getProducts = async () => {
  const response = await axios
    .get('product/')
    .then((data) => data)
    .catch((erro) => {
      toast.error(erro.data.message);
    });
  if (response === undefined) return;
  // eslint-disable-next-line consistent-return
  return response.data;
};
