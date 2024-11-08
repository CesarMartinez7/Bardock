import React from 'react';
import Loading from 'react-loading-components';

const LoadingComp = () => (
  <Loading  type='oval' width={60} height={60} fill='#4338CA' />
);

const LoadingPage = () => {
  return(
    <div className="container-center">
      <LoadingComp/>
    </div>
  )
}



export default LoadingPage;