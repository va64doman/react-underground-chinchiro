/**
 * CREATION DATE: 27/07/2021
 * UPDATE DATE: 27/07/2021
 */

import React from "react";

const ThrowBar = (props) => {

  const { bgcolor, throwVal } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${throwVal}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }


  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
          <span style={labelStyles}>{`${throwVal}%`}</span>
      </div>
    </div>
  );
};

export default ThrowBar;