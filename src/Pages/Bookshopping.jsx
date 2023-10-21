import React from 'react'
import "../Styles/Bookshopping.css";
import Contactpage from './FooterPage';
import book from "../assets/book.jpg";
import Book2 from "../assets/Book2.jpg";
import Navbar from './Navbar';
import Bookcard from '../Multiuse_Pages/Bookcard';
import Customer_review from '../Multiuse_Pages/Customer_review';


function Bookshopping() {

    const Books = {
        "books": [
            {
                "isbn": "9781593275846",
                "title": "Eloquent JavaScript, Second Edition javaScript djfoqiur eofih oiu3 oriuroiquf",
                "subtitle": "A Modern Introduction srkjksjlckjwk lkdjsnlkewj'pdewodito Programming",
                "author": "Marijn Haverbeke",
                "published": "2014-12-14T00:00:00.000Z",
                "publisher": "No Starch Press",
                "price": 472,
                "description": "JavaScript lies at the heart of almost every modern web application, from social apps ",                "website": "http://eloquentjavascript.net/"
            },
            {
                "isbn": "9781449331818",
                "title": "Learning JavaScript Design Patterns",
                "subtitle": "A JavaScript and jQuery Developer's Guide",
                "author": "Addy Osmani",
                "published": "2012-07-01T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 254,
                "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
                "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
            },
            {
                "isbn": "9781449365035",
                "title": "Speaking JavaScript",
                "subtitle": "An In-Depth Guide for Programmers",
                "author": "Axel Rauschmayer",
                "published": "2014-02-01T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 460,
                "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
                "website": "http://speakingjs.com/"
            },
            {
                "isbn": "9781491950296",
                "title": "Programming JavaScript Applications",
                "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
                "author": "Eric Elliott",
                "published": "2014-07-01T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 254,
                "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
                "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
            },
            {
                "isbn": "9781593277574",
                "title": "Understanding ECMAScript 6",
                "subtitle": "The Definitive Guide for JavaScript Developers",
                "author": "Nicholas C. Zakas",
                "published": "2016-09-03T00:00:00.000Z",
                "publisher": "No Starch Press",
                "price": 352,
                "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
                "website": "https://leanpub.com/understandinges6/read"
            },
            {
                "isbn": "9781491904244",
                "title": "You Don't Know JS",
                "subtitle": "ES6 & Beyond",
                "author": "Kyle Simpson",
                "published": "2015-12-27T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 278,
                "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
                "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
            },
            {
                "isbn": "9781449325862",
                "title": "Git Pocket Guide",
                "subtitle": "A Working Introduction",
                "author": "Richard E. Silverman",
                "published": "2013-08-02T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 234,
                "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
                "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
            },
            {
                "isbn": "9781449337711",
                "title": "Designing Evolvable Web APIs with ASP.NET",
                "subtitle": "Harnessing the Power of the Web",
                "author": "Glenn Block, et al.",
                "published": "2014-04-07T00:00:00.000Z",
                "publisher": "O'Reilly Media",
                "price": 538,
                "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
                "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
            }
        ]
    }


    return (
        <div className='bookshopping'>
            <Navbar />
            <header className='book_shopping_title'>
                <h1 className='title'>Book Shop</h1>
                <span className='sub_title'>
                    Home/<span style={{ color: "coral" }} className='sub_sub_title'>
                        Book Shop
                    </span>
                </span>
            </header>

            <section className='best_seller_books'>
                <h1 className='best_seller_books_title'>Best Seller Books</h1>
                <div className='best_seller_books_section'>
                    {
                        Books.books.map((b) => (<Bookcard name={b.title} aboutbook={b.subtitle} key={b.isbn} acualcost={b.price + 10} discountcost={b.price} />
                        ))
                    }

                </div>
            </section>

            <section className='best_seller_books_of_the_month'>
                <div className='books_pic_main_div'>
                    <img src={book} alt="bestbooks_pic" width={"100%"} height={"100%"} style={{ objectFit: "cover" }} />
                </div>
                <div className='best_seller_books_right'>
                    <span className='heading'>
                        Best Selling Book <br /> Of The month
                    </span>
                    <span className='book_star_rating'>
                        ⭐ ⭐ ⭐ ⭐ ⭐
                    </span>
                    <p className='book_desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore placeat modi atque laudantium itaque quaerat eligendi officia voluptates ipsa dolore!
                    </p>
                    <span className='book_rate'>
                        $50.00
                    </span>
                    <button className='buy_now_button'>
                        Buy Now
                    </button>
                </div>
            </section>
            {/* completed */}

            <section className='all_e_products'>
                <div className="all_e_products_left">
                    <span className='all_e_products_left_head_title'>
                        Take A First Look In <br />
                        The E-Books Value
                    </span>
                    <p className='all_e_products_left_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum unde maiores excepturi libero cupiditate dicta!
                    </p>
                    <button className='see_our_products_button'>
                        See our products →
                    </button>
                </div>
                <div className='all_e_products_right' >
                    <img src={Book2} alt='Ebooks' width={"50%"} height={"100%"} style={{ objectFit: "cover", margin: "0 auto", borderRadius: "20px" }} />
                </div>
            </section>


            <section className='new_releases'>
                <h1 className='new_releases_title'>New Releases</h1>
                <div className='new_releases_books'>
                {
                        Books.books.map((b) => (<Bookcard name={b.title} aboutbook={b.subtitle} key={b.isbn} acualcost={ b.price + 10} discountcost={b.price} />
                        ))
                    }
                </div>
            </section>

            <section className='our_customers'>
                <h1 className='our_customers_title'>
                    Our Customers
                </h1>

                <div className='our_customer_reviews'>
                    <Customer_review/>
                    <Customer_review/>
                    <Customer_review/>
                </div>


            </section>
            <footer className='see_all_products_footer'>
                <div className='see_all_products_footer_left'>
                    <span className='heading'>
                        We Provide You The
                        Experience
                    </span>
                    <p className='heading_desc'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
                    </p>
                    <button className='see_our_products'>
                        See our products →
                    </button>



                </div>
                <div className='see_all_products_footer_right'>

                    <img src={book} alt="bestbooks_pic" width={"100%"} height={"100%"} style={{ objectFit: "cover" }} />

                </div>
            </footer>


            <Contactpage />
        </div >
    )
}

export default Bookshopping