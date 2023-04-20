import React from "react";
// {title}
const Button = ({ color, childern, whereTo, ...props }) => {
  
  return (
    <button
    type="button"
    
      className={`${color} border-2 px-4 text-lg py-2 border-blue `}
      {...props}>
      {whereTo ? <a href={whereTo}>{childern}</a> : <p>{childern}</p>}
    </button>
  );
};

export default Button;
