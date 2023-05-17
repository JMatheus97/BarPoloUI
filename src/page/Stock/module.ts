/* eslint-disable consistent-return */
import { ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import { IProduct } from '../Product';

export const selectProcuts = (e: ChangeEvent<HTMLSelectElement>, products: IProduct[]) => {
  if (e.target.value === '') return;
  if (products.length === 0) return;

  const filterProducts = products.find((p) => p.nome === e.target.value);

  if (filterProducts === undefined) {
    toast.error('Não foi buscar selecionar produto !\n Tente novamnte !', { autoClose: 7000 });
    return null;
  }
  return filterProducts;
};
