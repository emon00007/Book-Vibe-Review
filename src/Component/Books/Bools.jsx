import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

const Bools = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book

    return (

        <Link to={`/details/${bookId}`}><div className="card  bg-base-100 shadow-xl">

        <figure><img className="mt-5 rounded-md" src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <div className="flex justify-between ">
                {
                    tags.map((tag, index) => (
                        <div key={index} ><p  className="bg-gray-100 p-1 px-5 rounded-xl">{tag}</p></div>
                    ))
                }
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>by:{author}</p>
            <div className=" grid md:grid-cols-2 ">
                <div className="  ">{category}</div>
                <div className="flex gap-3 ">{rating}<MdOutlineStarRate className="text-2xl"></MdOutlineStarRate></div>
            </div>
        </div>
    </div></Link>
    );
};

export default Bools;