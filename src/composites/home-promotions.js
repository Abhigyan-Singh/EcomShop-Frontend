const HomePromotions = (props) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col mb-5 lg:items-end lg:flex-row lg:space-x-10">
        <div className="font-serif text-lg tracking-widest uppercase">
          Promotional Headline
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[...Array(2)].map((e, i) => (
          <a
            className="flex flex-col md:flex-row relative bg-clementine rounded-sm shadow-sm ring-1 ring-black ring-opacity-5 overflow-hidden"
            key={i}
          >
            <div className="relative md:w-1/2">
              <img
                className="h-72 md:absolute md:inset-0 w-full md:h-full object-cover"
                src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="relative flex flex-col h-full p-5 text-white md:justify-center md:px-6 md:py-10 md:w-1/2 lg:h-64">
              <div className="font-serif text-xl md:text-2xl mb-2">
                Featured Title
              </div>
              <p className="text-base md:text-lg md:leading-tight mb-2">
                At Coborn’s, our mission is to provide you with fresh, quality
                food.
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePromotions;
