const HeaderItems = ({IconArray}) => {
  return (
    < >
      {" "}
      {IconArray.map((icon) => {
        return (
          <div  key={icon.id} className=' cursor-pointer flex flex-col items-center group w-12 sm:w-20 hover:text-white'>
            <h2 className="group-hover:animate-bounce">{icon.name}</h2>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{icon.label}</p>
          </div>
        );
      })}
    </>
  );
};

export default HeaderItems;
