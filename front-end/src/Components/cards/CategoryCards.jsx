import React from 'react'

const CategoryCards = ({catgeoryName , img}) => {
  return (
    <>
        <div className='bg-white p-4 rounded-lg shadow-md text-center hover:scale-95'>
            <img src={img} alt={catgeoryName} className='w-full h-32 object-cover rounded-md mb-2'/>
            <h2 className='text-lg font-semibold'>{catgeoryName}</h2>
        </div>
    </>
  )
}

export default React.memo(CategoryCards);