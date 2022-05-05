<div
className="flex-1"
>
{map(data, (option) => (
  <div>
  <Disclosure.Button                         
    key={option.id.area}
    option={option.description}
    onClick={() => {
      navigate('/search?text=' + option.description)
    
      // handleDeptChange(
      //   option.description
      // )
    }}
    className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
>
  <span className="flex items-center flex-1">
   {item.icon && <item.icon />}
    <span className="text-base font-medium">
    {option.description}   
    </span>
  </span>
  
  </Disclosure.Button> 
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
    <Disclosure.Panel>
    {data.map((subItem) =>
      subItem.description === 'Baby' ? (
        <a
          target="_blank"
          rel="noreferrer noopener"
          className="py-2 pl-6 pr-3 flex items-center rounded transition ease-in-out duration-150 w-full text-gray-500 hover:bg-yellow-100"
        >
          testign
        </a>
      ) : null                                                                                             
    )}                                                       
    </Disclosure.Panel>
  </Transition>
  </div>                                                                                            
))}
</div>