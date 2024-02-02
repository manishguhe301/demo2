import Card from './Card';

const List = () => {
  const cards = Array(12).fill(null);

  return (
    <div className='flex justify-center'>
      <div className='mx-auto px-5 my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {cards.map((card, index) => (
          <Card key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default List;
