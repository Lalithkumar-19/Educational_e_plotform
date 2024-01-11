import React from 'react'
import "../Styles/CuriculmTemp.css"
import AccordionTemp from '../Multiuse_Pages/Accordion'
function CuriculmTemp({circulum}) {
  return (
    <div className='CuriculmTemp'>
      {
        circulum&&Array.isArray(circulum)&&circulum.map((item,i)=>{
          return <AccordionTemp heading={item.title} content={item.curriculum_content}/>
        })
      }

        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        <AccordionTemp heading={"What is Search Engine Optimisation(SEO)"} content={"Details about seo "}/>
        

    </div>
  )
}

export default CuriculmTemp