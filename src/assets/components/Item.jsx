
const Item = () => {
  return (
    <div className="container">
        <div className="card grid  grid-cols-3 gap-12">


            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-collection p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">Fresh new layout</h2>

                <p>With Bootstrap 5, we have created a fresh <br /> new layout for this template!</p>
            </div>
            </div>

            {/* item2  */}
            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-cloud-download p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">Free to download</h2>
                <p>As always, Start Bootstrap has a <br /> powerful collectin of free templates.</p>
            </div>
            </div>


            {/* item3  */}
            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-card-heading p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">Jumbotron hero header</h2>
                <p>The heroic part of this template is the <br /> jumbotron hero header!</p>
            </div>
            </div>


            {/* item4  */}
            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-bootstrap p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">Feature boxes</h2>
                <p>We have created some custom feature <br /> boxes using Bootstrap icons!</p>
            </div>
            </div>

            {/* item 5  */}
            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-code p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">Simple clean code</h2>
                <p>We keep our dependencies up to date <br /> and squash bugs as they come!</p>
            </div>
            </div>

            {/* item 6  */}
            <div className="card_body bg-gray-100 text-center rounded-md   " >

                <div className="card_feature -mt-5   ">
                <i className="bi bi-patch-check p-5 bg-blue-600 text-2xl text-white rounded-md "></i>
                </div>
                <div className="card_content py-10">
                <h2 className="text-2xl font-bold">A name you trust</h2>
                <p>Start Bootstrap has been the leader in <br /> free Bootstrap templates since 2013!</p>
            </div>
            </div>















           


        </div>
        

        
    </div>
  )
}

export default Item