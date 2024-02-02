const Card = ({ id }) => {
  return (
    <div className='h-[250px] w-[300px] border-[1px] border-slate-400 rounded-lg px-4 py-4 flex flex-col justify-between bg-white shadow-lg max-sm:w-full'>
      <h2 className='text-xl font-bold text-blue-600'>Card No - {id}</h2>
      <p className='text-gray-600'>
        This is some dummy data for card number {id}.
      </p>
      <button className='mt-2 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600'>
        View More
      </button>
    </div>
  );
};

export default Card;
