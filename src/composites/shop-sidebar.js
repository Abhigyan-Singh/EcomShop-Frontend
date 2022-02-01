import {
  ChevronLeftIcon,
  ChevronDownIcon,
  SwitchHorizontalIcon,
  HeartIcon
} from '@heroicons/react/solid';
const ShopSidebar = (props) => {
  return (
    <div className="flex">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col py-5 overflow-y-auto">
              <div className="flex-1 flex flex-col px-5 border-r">
                <div className="flex-shrink-0 font-serif uppercase tracking-widest mb-4">
                  Departments
                </div>
                <nav className="flex-1" aria-label="Sidebar Navigation">
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <ChevronLeftIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1">All Departments</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Frozen</span>

                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                      </a>
                      <ul className="list-none pl-3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">Appetizers</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">
                              Desserts &amp; Toppings
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
<<<<<<< HEAD
                            <span className="block flex-1">Frozen Baked Goods</span>
=======
                            <span className="block flex-1">
                              Frozen Baked Goods
                            </span>
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
<<<<<<< HEAD
                            <span className="block flex-1">Frozen Breakfast</span>
=======
                            <span className="block flex-1">
                              Frozen Breakfast
                            </span>
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
<<<<<<< HEAD
                            <span className="block flex-1">Frozen Desserts</span>
=======
                            <span className="block flex-1">
                              Frozen Desserts
                            </span>
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">Frozen Fruit</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">Frozen Juice</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-bold border-b-2 border-lime-100 cashwise:border-merlot marketplace:border-forest flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">
                              Frozen Meals &amp; Entrees
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">Frozen Pasta</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
                            <span className="block flex-1">Frozen Pizza</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center text-sm py-1 hover:underline"
                          >
<<<<<<< HEAD
                            <span className="block flex-1">Frozen Potatoes</span>
=======
                            <span className="block flex-1">
                              Frozen Potatoes
                            </span>
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
<<<<<<< HEAD
                        href="#"
=======
                        href="/dispmyshoppinglistdetails"
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <SwitchHorizontalIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1 pl-1">
                          Previously Purchased
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
<<<<<<< HEAD
                        href="#"
=======
                        href="/favorites"
>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <HeartIcon
                          className="h-5 w-5 text-gray-300 transform"
                          aria-hidden="true"
                        />
                        <span className="block flex-1 pl-1">Favorites</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="list-none py-2 m-0 border-t border-gray-100">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Shop Local</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Our Brands</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Custom Cakes</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-sm py-1 hover:underline"
                      >
                        <span className="block flex-1">Specials</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
