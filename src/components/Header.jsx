import Options from './Options';
const Header = () => {
  return (
    <div className='h-[60px] w-full px-5 py-3 bg-blue-600 text-white flex items-center justify-between'>
      <h1 className='text-2xl font-bold'>Header</h1>
      <Options />
    </div>
  );
};

export default Header;
