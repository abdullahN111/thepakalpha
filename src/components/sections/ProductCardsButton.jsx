

const ProductCardsButton = ({classes, prevSlide, nextSlide}) => {
  return (
    <div className={classes}>
    <button
      onClick={prevSlide}
      className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
    >
      &larr;
    </button>
    <button
      onClick={nextSlide}
      className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
    >
      &rarr;
    </button>
  </div>
  )
}

export default ProductCardsButton