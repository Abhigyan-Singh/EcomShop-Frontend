import { ChevronRightIcon } from '@heroicons/react/solid';

const HomeRecipes = (props) => {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col mb-5 lg:items-end lg:flex-row lg:space-x-10">
        <div className="flex-1 font-serif text-lg tracking-widest uppercase mb-2 lg:mb-0">
          Weeknight Meals
        </div>
        <div>
          <a href="#link">
            <span className="flex items-center">
              <span>See More Recipes</span>
              <ChevronRightIcon className="h-5 w-5 ml-2" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(4)].map((e, i) => (
          <a
            href="#link"
            className="block relative rounded-sm shadow-sm ring-1 ring-black ring-opacity-5 bg-white overflow-hidden"
            key={i}
          >
            <div className="h-56">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="relative p-5">
              <p className="text-sm md:text-base md:leading-tight">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeRecipes;
