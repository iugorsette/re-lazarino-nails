export function Background() {
  return (
    <>
      <div
        className="
    relative flex place-items-start 
    before:absolute  
    before:w-full sm:before:w-[480px] 
    before:-translate-x-1/2 
    before:rounded-full 
    before:bg-gradient-radial 
    before:to-transparent before:blur-xl
    
    after:absolute 
    after:-z-20 
    after:h-[20px]
    after:w-full 
    sm:after:w-[400px] 
    after:translate-x-1/3 
    after:bg-gradient-conic 
    after:blur-2xl 
    
    before:dark:bg-gradient-to-br 
    before:dark:from-transparent 
    before:dark:to-rose-700 
    before:dark:opacity-10 
    after:dark:from-pink-900 
    after:dark:via-[#ca03c0] 
    after:dark:opacity-40 
    before:lg:h-[320px] z-[-1]"
      ></div>
      
      <div
        className="
    relative flex place-items-center 
    before:absolute 
    before:w-full sm:before:w-[980px] 
    before:-translate-x-1/2 
    before:rounded-full 
    before:bg-gradient-radial 
    before:from-white 
    before:to-transparent before:blur-2xl 
    
    after:absolute 
    after:-z-20 
    after:h-[180px]
    after:w-full 
    sm:after:w-[400px] 
    after:translate-x-1/3 
    after:bg-gradient-conic 
    after:from-pink-700 
    after:via-pink-200 
    after:blur-2xl 
    
    before:dark:bg-gradient-to-br 
    before:dark:from-transparent 
    before:dark:to-pink-700 
    before:dark:opacity-10 
    after:dark:from-pink-900 
    after:dark:via-[#ff00f2] 
    after:dark:opacity-40 
    before:lg:h-[900px] z-[-1]"
      ></div>
    </>
  );
}
