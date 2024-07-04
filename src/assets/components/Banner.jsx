
const Banner = () => {
  return (
    <div className="banner">
    <div className="container">
        <div className="banner_body text-center m-20 bg-gray-100">
            <div className="banner_content p-20">
        {/* title */}
        <div className="banner_title p-3 ">
          <h1 className="text-5xl p-2 font-bold">A warm welcome!</h1>  
          <p className="text-2xl font-normal">Bootstrap utility classes are used to create this jumbotron since the old component has been <br /> removed from the framework. Why create custom CSS when you can use utilities?
</p>
          </div>

          {/* button  */}
          <div className="banner_button ">
            <button className="px-4 py-3  rounded-lg outline-4 bg-blue-600 border  text-xl hover:bg-blue-800 duration-300">Call to action </button>
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Banner