import "./productList.css";
import { useEffect, useState } from "react";
import Product_EditModal from "../Modals/Product_EditModal";
import axios from "axios";
import Bookcard from "../Multiuse_Pages/Bookcard";

export default function ProductList({selected}) {
  const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetch_books() {
            const res = await axios.get("http://localhost:5000/Get_all_books?token=" + localStorage.getItem("instructor-token"));
            if (res.status === 200) {
                setBooks(res.data);
            }
        }
        fetch_books();
    }, [])
    return (
        <div className='all_books'>

            <section className='main_books_admin_section'>
                <h2 className='books_page_title'>All Books </h2>
                <div className='books_div'>
                    {
                        books.length > 0 ? books.map((item, i) => {
                            return <Bookcard  backdrop={"http://localhost:5000/" + item.book_pics[0]} id={item._id} name={item.title} aboutbook={item.description} acualcost={item.book_price} discountcost={item.book_actual_price} admin={true} key={i} />
                        }) : <h2>No Books posted </h2>
                        
                    }
                </div>

            </section>
        </div>
    )
}