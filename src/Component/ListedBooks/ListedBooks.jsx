import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookReadDetails } from "../Utlite/localStroge";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadsBooks from "../ReadsBooks/ReadsBooks";
import WishList from "../WishList/WishList";
import { getBookWishDetails } from "../Utlite/localStorageWish";



const ListedBooks = () => {
    const bookss = useLoaderData();
    const [appendWishBooks, setApendWishBooks] = useState()
    // const [displayBooks, setDisplayBooks] = useState()
    // const handelSort = filter=>{
    //     if(filter === 'all'){
    //         setDisplayBooks(appendWishBooks)

    //     }else if(filter === 'Fiction'){
    //         const Fictionbook = appendWishBooks.filter(book =>book.category ==='Fiction')
    //         setDisplayBooks(Fictionbook)
    //     }else if (filter === 'Science_Fiction')
    // {   
    //      const socialbook =appendWishBooks.filter( book =>book.category==='Science_Fiction')
    //      setApendBooks(socialbook)
    //     }
    // }
    useEffect(() => {
        const storedWishIds = getBookWishDetails();

        if (bookss.length > 0) {
            const BookssWish = []
            for (const id of storedWishIds) {
                const books = bookss.find(books => books.bookId === id)

                if (books) {
                    BookssWish.push(books)
                }
            }
            setApendWishBooks(BookssWish)
            // setDisplayBooks(BookssWish)
            // console.log(appendWishBooks)

        }
    }, [])
    const [appendBooks, setApendBooks] = useState()
    useEffect(() => {
        const storedBooksIds = getBookReadDetails();

        // console.log(storedBooksIds)
        if (bookss.length > 0) {
            const BookssRead = []

            for (const id of storedBooksIds) {
                const books = bookss.find(books => books.bookId === id)
                // console.log(books)
                if (books) {
                    BookssRead.push(books)
                }
            }
            setApendBooks(BookssRead)

        }
    }, [])

    return (
        <div>
            <div className="text-center text-4xl font-bold mt-5">
                <div>Books</div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white mt-5">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li > <a>Item 1</a></li>
                        <li ><a>Item 2</a></li>
                        <li ><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist BooksTitle 2</Tab>
                </TabList>

                <TabPanel>

                    <div className="">
                        {
                            appendBooks?.map(book => <ReadsBooks key={book.bookId} book={book}></ReadsBooks>)

                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="">
                        {
                           appendWishBooks?.map(book => <WishList key={book.bookId} book={book}></WishList>)

                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;