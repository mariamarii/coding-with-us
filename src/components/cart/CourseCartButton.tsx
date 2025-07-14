'use client';

type Props = {
  inCart: boolean;
};

const CourseCardClient = ({ inCart }: Props) => {
  const handleClick = () => {
    if (inCart) {
      console.log('🔁 Go to cart');
    } else {
      console.log('🛒 Add to cart');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 w-full py-2 text-white text-sm font-bold rounded-md transition-colors duration-300"
      style={{ backgroundColor: '#78C040' }}
    >
      {inCart ? 'Go to Cart' : 'Add to Cart'}
    </button>
  );
};

export default CourseCardClient;
