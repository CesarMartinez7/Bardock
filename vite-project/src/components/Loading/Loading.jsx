import React from 'react';
import Loading from 'react-loading-components';

const LoadingComp = () => (
  <Loading  type='oval' width={100} height={100} fill='#2f2f2f' />
);

const LoadingPage = () => {
  return(
    <div className="container-center">
      <LoadingComp/>
    </div>
  )
}



export default LoadingPage;