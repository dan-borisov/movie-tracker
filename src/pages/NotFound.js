import React from 'react';

const NotFound = () => {

    const containerStyle = {
        height: '66vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

  return (
    <div className="container" style={containerStyle}>
        <div className="row">
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    </div>
  );
};

export default NotFound;