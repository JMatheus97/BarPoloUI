/* eslint-disable consistent-return */
import { toast } from 'react-toastify';

export const selectProcuts = (e, products) => {
  if (e.target.value === '') return;
  if (products.length === 0) return;

  const filterProducts = products.find((p) => p.nome === e.target.value);

  if (filterProducts.length === 0) {
    toast.error('Não foi buscar selecionar produto !\n Tente novamnte !', { autoClose: 7000 });
    return null;
  }
  return filterProducts;
};
