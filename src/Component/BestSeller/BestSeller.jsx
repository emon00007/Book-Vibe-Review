// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestSeller = () => {
    // const Bestsellar = useLoaderData()
    const [bestbooks, setbestBooks] = useState([])
    useEffect(() => {
        fetch('bestSeller.json')
            .then(res => res.json())
            .then(data => setbestBooks(data))


    }, [])
    return (
       <div>
         <div className="grid md:grid-cols-3 gap-5">
            {
                bestbooks.map(books =>
                    <div key={books.id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img  src={books.image} alt="Shoes" className="rounded-xl md:h-96 :w-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{books.bookName}</h2>
                                <p>Author:{books.author}</p>
                                <div className="card-actions">
                                    
                                </div>
                            </div>
                        </div>
                    </div>)

            }
            
        </div>
       <div className="text-center my-10">
       <Link to="/"><button className="btn  bg-green-500 text-white">Home page</button></Link>
       </div>
       </div>

    );

}
export default BestSeller;