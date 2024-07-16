import React from 'react';
import { PulseLoader } from 'react-spinners';
import '../Styles/loading.css'; 

export default function Loading() {
  return (
    <div className="loading-spinner">
      <PulseLoader color="hsla(180, 7.57%, 49.22%, 1)" size={15} margin={2} />
    </div>
  );
}
