import { useState } from 'react';

const Options = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMenu(!showMenu)} className='text-lg '>
        Options
      </button>
      {showMenu && (
        <div className='text-black absolute bg-gray-400 mt-5 px-2 py-2 cursor-pointer'>
          <p>Menu</p>
          <p>Options 2</p>
        </div>
      )}
    </div>
  );
};

export default Options;
