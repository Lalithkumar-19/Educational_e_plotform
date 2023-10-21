import React from 'react'
import "../Styles/overview_course_desc.css";
import { CheckCircle } from '@mui/icons-material';
function Overview_course_desc() {
  return (
    <div className='course_desc' >
      <h3>Course Description</h3>
      <p className='course_Para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit id dignissimos, nulla neque eveniet necessitatibus aperiam molestiae facere sapiente impedit magnam ut. Iste ratione debitis quibusdam modi, tempora molestiae enim.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas eos iure recusandae laboriosam laborum? Eveniet minima quidem consequatur dolorem vero sequi dolores assumenda consectetur recusandae! Similique itaque error eius.
      </p>
      <h3>What you'll learn</h3>
      <div className='learning_list'>

        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ex hic consequuntur! Animi magni accusantium aspernatur nemo itaque doloribus fugit doloremque! Quam, tempora dolorum ullam exercitationem quia doloremque! Et repudiandae similique nostrum in, doloribus quaerat asperiores? Necessitatibus impedit, cum magnam totam asperiores aliquam quos culpa et voluptates qui, nobis eum similique voluptatem praesentium illo neque recusandae. Dolor impedit blanditiis debitis delectus repudiandae, totam voluptatum ipsa neque suscipit dolorem. Quasi vero doloremque quos illo eius, ratione nam ullam numquam voluptatem libero architecto earum ipsam quibusdam ut accusantium alias at. Voluptatem sed aliquid temporibus consectetur ducimus nemo atque tempore autem! Quod, fugit! Nam tenetur consequatur excepturi veniam ipsa eos ullam. Obcaecati fugiat rerum in maxime fugit, ipsum eligendi vitae impedit quas optio neque consectetur quae ducimus culpa dolore hic ab, ex saepe est eaque ad? Saepe, odit dolore. Earum in, accusantium fugit animi provident quaerat beatae dignissimos esse aspernatur ut officiis omnis, porro dicta assumenda repellat expedita ab reprehenderit consequatur eligendi commodi sapiente autem facilis nesciunt eos. Numquam voluptate molestias corporis, ipsam dicta aliquid sunt maiores fugiat reiciendis? Eos accusantium soluta velit? Odio aut, aliquid hic cumque illo iusto. Nostrum accusamus quis vitae dolorum non ad nemo deserunt voluptates odio explicabo natus, optio provident ipsum quaerat sunt incidunt? Molestiae ipsam hic, at eum magni in asperiores qui laudantium, quas quaerat blanditiis sunt quos dolorum eaque accusantium. Placeat, saepe? Porro ducimus veritatis ullam? */}
        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Become a UI/UX designer.</span>
        </span>
        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>You will be able to start earning money from skills.</span>
        </span>
        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Build a UI projects from beginning to end.</span>
        </span>
        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Works with colors and fonts.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>You wwill able to create your own Ui Kit.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Build & Test a complete mobile app.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Learn to design mobile apps & websites.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Design 3 different logos.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Design a low-fidelity wireframe.</span>
        </span>

        <span className='learning_list_item'>
          <CheckCircle />
          <span className='list_item_name'>Downloadable resources and files.</span>
        </span>


      </div>
      <div className='requirements'>
        <h3 className='requirements_heading'>Requirements</h3>
        
          <li>No previous knowledge on Figma needed.</li>
          <li>You will need a copy of FIgma 2023 0r above</li>
          <li> No previous design experience needed</li>
        
      </div>

    </div>
  )
}

export default Overview_course_desc;