import React from 'react';

const Card = ({name, email, id}) => {
  // const { name, email, id } = props; or we can destruct props with the props parameter
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='Robots' src={`https://robohash.org/${id}`}/>
      <div className='tc'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;