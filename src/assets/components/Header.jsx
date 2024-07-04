
const Header = () => {
  return (
 <div className="header bg-black ">
    <div className="container">
   <div className="header_content flex flex-row p-3">
        
        <div className=" w-4/5 text-white text-2xl"><h2>Start Bootstrap</h2></div>

        <div className=" text-white text-base ">
            <ul className="flex flex-row ">
                <li className="flex-none w-14"><a href="#">Home</a></li>
                <li className="flex-none w-14" ><a className="text-slate-400 hover:text-slate-200" href="#">About</a></li>
                <li  ><a className="text-slate-400 hover:text-slate-200"  href="#">Contact</a></li>
            </ul>
        </div>


   </div>
   </div>
   </div>
  )
}

export default Header