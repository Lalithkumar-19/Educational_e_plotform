import React from 'react';
import "./Admin.css";
import { useState } from 'react';
import Topbar from '../AdminpanelComponents/Topbar';
import Sidebar from '../AdminpanelComponents/Sidebar';
import AdminHome from '../AdminPanelPages/AdminHome';
import ProductList from '../AdminPanelPages/ProductList';
import NewUser from '../AdminPanelPages/NewUser';
import UserList from '../AdminPanelPages/UserList';
import NewProduct from '../AdminPanelPages/NewProduct';
import { useEffect } from 'react';
import WidgetLg from '../AdminpanelComponents/WidgetLg';
import Courses from "../Pages/Feautured_courses"
import Instructors_manage from '../AdminPanelPages/Instructors_manage';
import Application_manage from '../AdminPanelPages/Application_manage';

function Admin() {
  const [Selected, setSelected] = useState(1);

const handlepages=()=>{
  switch (Selected) {
    case 1: return <AdminHome />;
    case 2: return <UserList/>;
    case 3: return <NewUser />;
    case 4: return <ProductList/>;
    case 5: return <NewProduct />;
    case 6: return <WidgetLg />;
    case 7: return <Courses courses_restrict={true} heading={"Courses"}  desc={"Admin Panel controls"} />;
    case 8: return <Instructors_manage/>;
    case 9: return <Application_manage/>;
    default: return <AdminHome/>;

  }
};
useEffect(()=>{
  handlepages();
},[])

  return (
    <div className='admin_page'>
      <Topbar />
      <div className='admin_page_container'>
        <Sidebar selectedpage={setSelected}/>
        <div className='other_pages'>
         {
          handlepages()
         }
        </div>
      </div>
         </div>
  );
}

export default Admin;
