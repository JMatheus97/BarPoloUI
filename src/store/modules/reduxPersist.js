import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (redurces) => {
  const persistReducers = persistReducer(
    {
      key: 'BarPoloUi',
      storage,
      whitelist: ['auth'],
    },
    redurces
  );

  return persistReducers;
};
