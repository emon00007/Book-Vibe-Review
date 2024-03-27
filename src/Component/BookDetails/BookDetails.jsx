import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookReadDetails } from "../Utlite/localStroge";



const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()

    const handelAddWishlist = () => {
        
        toast('you have add sucessfully')
    }

    const handelAddRead = () => {
        saveBookReadDetails(idInt)
    }
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = book
    // console.log(book)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-96 rounded-lg shadow-2xl" />
                <div className="md:p-20">
                    <h1 className="text-5xl font-bold ">{bookName}</h1>
                    <h3>By:{author}</h3>
                    <hr className="border-[1px]  border-black my-2" />
                    <h3 className="text-2xl">{category}</h3>
                    <hr className="border-[1px]  border-black my-2" />
                    <p className="py-4">Review:{review}</p>
                    <div className=" flex gap-2"><span className="text-2xl ">Tags</span><div className="grid grid-cols-2 gap-10 ">
                        {
                            tags.map((tag, index) => (
                                <div key={index} ><p className="bg-gray-200 p-1 px-5 rounded-xl">{tag}</p></div>
                            ))
                        }
                    </div></div>
                    <hr className="border-[1px]  border-black my-2" />
                    <p>Number of Pages:<span>{totalPages}</span></p>
                    <p>Publisher:<span>{publisher}</span></p>
                    <p>Year of Publishing:<span>{yearOfPublishing}</span></p>
                    <p>Rating:<span>{rating}</span></p>

                    <div className="flex gap-20">
                        <button onClick={handelAddRead} className="btn btn-primary">Read</button>
                        <button onClick={handelAddWishlist} className="btn btn-primary">Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;