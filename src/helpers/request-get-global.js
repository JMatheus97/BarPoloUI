import { toast } from 'react-toastify';
import axios from '../services/axios';

// GET PRODUCTS
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

// GET STOCKS
export const getStocks = async () => {
  const response = await axios
    .get('stock/')
    .then((data) => data)
    .catch((erro) => {
      toast.error(erro.data.message);
    });
  if (response === undefined) return;
  // eslint-disable-next-line consistent-return
  return response.data;
};

export const getTables = async () => {
  const response = await axios
    .get('table/')
    .then((data) => data)
    .catch((erro) => {
      toast.error(erro.data.message);
    });
  if (response === undefined) return;
  // eslint-disable-next-line consistent-return
  return response.data;
};

export const getStores = async () => {
  const response = await axios
    .get('store/')
    .then((data) => data)
    .catch((erro) => {
      toast.error(erro.data.message);
    });
  if (response === undefined) return;
  // eslint-disable-next-line consistent-return
  return response.data;
};
