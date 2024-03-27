import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Bools from "../Books/Bools";


const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            
    }, [])
    return (

        <div>
            <Banner></Banner>
            <h2 className="text-6xl text-center my-10"> Book</h2>
            <div className="grid md:grid-cols-3 gap-5 my-10 ">
                {
                    books.map(book=><Bools key={book.id} book={book}></Bools>)
                }
            </div>
        </div>
    );
};

export default Home;