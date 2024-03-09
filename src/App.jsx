import Homepage from "./Pages/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Online_Course_overview from "./Pages/Online_Course_overview"
import Feautured_courses from "./Pages/Feautured_courses"
import Blogsshowingpage from "./Pages/Blogsshowingpage"
import Navbar from "./Pages/Navbar"
import Online_course_img from "./assets/courses.jpg"
import "../src/App.css"
import Blogviewer from "./Multiuse_Pages/Blogviewer"
import Bookshopping from "./Pages/Bookshopping"
import Courseplayer from "./Pages/Courseplayer"
import Bookshopping_details from "./Pages/Bookshopping_details"
import Cartpage from "./Pages/Cartpage"
import Contactpage from "./Pages/FooterPage"
import All_Instructors from "./Pages/All_Instructors"
import About_instructor from "./Multiuse_Pages/About_instructor";
import Checkoutpage from "./Pages/Checkoutpage"
import Payment_Success from "./PaymentPages/Payment_Success"
import Faqpage from "./FAQ_page/Faqpage"
import Loginpage from "./Loginpages/Loginpage"
import Course_list from "./Course_list/Course_list"
import Contact_page from "./Contact_page/Contact_page"
import Instructor_apply from "./Instructor_Apply/Instructor_apply"
import Admin from "./AdminPanels/Admin"
import OrdersPage from "./UsersPFPages/Orderspage"
import Dynamic_application_shower from "./Modals/Dynamic_application_shower"
import Instructor_panel from "./AdminPanels/Instructor_panel"
import Profilepage from "./UsersPFPages/ProfilePage"
import Profile from "./Admin_instructor/Profile"
import BlogEditor from "./Pages/BlogWriting_page"
import { useEffect } from "react"
import { GetUser_details } from "./Redux/Freq_funcs"
import WishlistPage from "./UsersPFPages/WIshlistPage"
import MyLearningsPage from "./UsersPFPages/My_learnings"
import Notfoundpage from "./Pages/Notfoundpage"


function App() {

  useEffect(() => {
    GetUser_details();
  }, [])

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          //general routes for all to access
          <Route Component={Homepage} path="/" />
          <Route Component={Online_Course_overview} path="/courses/overview/:id" />
          <Route Component={Courseplayer} path="/courseplayer/:id" />
          <Route Component={Blogviewer} path="/selectedblog/:id" />
          <Route Component={All_Instructors} path="/instructors" />
          <Route Component={About_instructor} path="/instructors/about_instructor/:id" />
          <Route Component={Bookshopping} path="/bookshopping" />
          <Route Component={Bookshopping_details} path="/bookshopping/selected_book/:id" />
          <Route Component={Payment_Success} path="/yourcart/checkout/success" />
          <Route Component={Faqpage} path="/faqpage" />
          <Route Component={Loginpage} path="/login" />
          <Route path="/course_list/:search_word" Component={Course_list} />
          <Route path="/course_list" Component={Course_list} />
          <Route path="/contactUs" Component={Contact_page} />
          <Route path="/apply_instructor" element={<Instructor_apply header_footer={true} />} />
          <Route path="/blogwrite" Component={BlogEditor} />
          <Route Component={Cartpage} path="/yourcart" />
          <Route path="*" Component={Notfoundpage} />

//routes with elements
          <Route element={
            <>
              <Navbar />
              <div className="courses_route">
                <h1 style={{ textAlign: "center", color: '#023e8a' }} >Featured Courses</h1><br />

                <img src={Online_course_img} alt="online_courses_png" />
              </div>
              <Feautured_courses courses_restrict={true} />
              <Contactpage />
            </>
          } path="/courses" />

          <Route element={
            <>
              <Navbar />
              <div className="blogs_route">

                <Blogsshowingpage headingshow={false} />
                <Contactpage />
              </div>
            </>
          } path="/blogs" />


//restricted routes for certain people

          {localStorage.getItem("admin_token") &&
            <>
              <Route path="/admin" Component={Admin} />
              <Route path="admin/application_see/:id" Component={Dynamic_application_shower} />
            </>
          }
//for instructor
          {
            localStorage.getItem("instructor_access") ? <Route path="/instructor_panel" Component={Instructor_panel} /> : ""

          }

//for logged in people
          {localStorage.getItem("token") &&
            <>  <Route path="/myorders" Component={OrdersPage} />
              <Route path="/profile" Component={Profile} />
              <Route path="/yourWishlist" Component={WishlistPage} />
              <Route path="/MyLearnings" Component={MyLearningsPage} />
              <Route Component={Profilepage} path="/profile" />
              <Route Component={Checkoutpage} path="/yourcart/checkout" />

            </>}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
