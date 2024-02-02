import Card from './Card';

const List = () => {
  return (
    <div className='mx-auto px-5 grid grid-cols-3 gap-3 	mt-6 '>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => (
        <Card key={card} id={card} />
      ))}
    </div>
  );
};

export default List;
