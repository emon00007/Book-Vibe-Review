import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookReadDetails } from "../Utlite/localStroge";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadsBooks from "../ReadsBooks/ReadsBooks";



const ListedBooks = () => {
    const bookss = useLoaderData();
    const [appendBooks, setApendBooks] = useState()
    useEffect(() => {
        const storedBooksIds = getBookReadDetails();

        if (bookss.length > 0) {
            const BookssRead =[]
            for(const id of storedBooksIds){
                const books = bookss.find(books=>books.bookId === id)
                console.log(books)
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;