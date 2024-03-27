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
    useEffect(()=>{
        const storedWishIds = getBookWishDetails();

        if (bookss.length > 0) {
            const BookssWish =[]
            for(const id of storedWishIds){
                const books = bookss.find(books=>books.bookId === id)
                
                if(books){
                    BookssWish.push(books)
                }
            }
            setApendWishBooks(BookssWish)
            // console.log(appendWishBooks)
            
        }
    },[])
    const [appendBooks, setApendBooks] = useState()
    useEffect(() => {
        const storedBooksIds = getBookReadDetails();
        
// console.log(storedBooksIds)
        if (bookss.length > 0) {
            const BookssRead =[]
            
            for(const id of storedBooksIds){
                const books = bookss.find(books=>books.bookId === id)
                // console.log(books)
                if(books){
                    BookssRead.push(books)
                }
            }
            setApendBooks(BookssRead)
            
        }
    }, [])
    
    return (
        <div>
            
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>

                  <div className="">
                  {
                      appendBooks?.map(book=><ReadsBooks key={book.bookId} book={book}></ReadsBooks>) 
                        
                    }
                  </div>
                   
                   

                </TabPanel>
                <TabPanel>
                <div className="">
                  {
                      appendWishBooks?.map(book=><WishList key={book.bookId} book={book}></WishList>) 
                        
                    }
                  </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;