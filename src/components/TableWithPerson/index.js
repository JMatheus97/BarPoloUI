import React, { useEffect, useState } from 'react';
import { getTables } from '../../helpers/request-get-global';

import './styles.css';

export default function TableWithPerson() {
  const [tableAvaiable, setTableAvaiable] = useState([]);

  const listTables = async () => {
    const resultTables = await getTables();
    setTableAvaiable(resultTables);
  };

  useEffect(() => {
    listTables();
  }, []);
  return (
    <>
      {tableAvaiable.map((ta) => (
        <div className="card-table">
          <img className="img-table" src="https://img.icons8.com/ios-filled/50/000000/tablecloth.png" alt="icon-table" />
          <p>
            <b>Numero Mesa: </b> {ta.tableNumber}
          </p>
          <p>
            <b>Quantidade Pessoas: </b>
            {ta.customerQuantity}
          </p>
          <p>
            <b>Status:</b> {ta.status}
          </p>
        </div>
      ))}
    </>
  );
}
