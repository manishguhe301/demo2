import { useState } from 'react';

const Options = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='text-lg text-white'
      >
        Options
      </button>
      {showMenu && (
        <div className='text-black absolute bg-gray-100 mt-5 px-2 py-2 cursor-pointer rounded shadow-lg w-32 left-[-50px]'>
          <p
            className='py-1 hover:bg-gray-200'
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Menu 1
          </p>
          <p
            className='py-1 hover:bg-gray-200'
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Menu 2
          </p>
        </div>
      )}
    </div>
  );
};

export default Options;
