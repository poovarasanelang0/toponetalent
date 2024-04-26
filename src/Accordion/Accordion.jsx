
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MuiAccordion from '@mui/material/Accordion'; 
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Accordion.css"

const CustomAccordion = () => { 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='container'>
        <h2 className='py-3' data-aos="fade-right" >Frequently Asked Questions About<span className='text-danger'>  Topone Services</span> </h2>

        <div>
            {/* defaultExpanded */}
            <div className="accordion-container">
            <div className="accordion-item">
            <MuiAccordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>What is an Top one Telents Company?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              An Top One Talents company offers Topone Talents to organisations through its team of experts. These services may include HR strategy creation, talent acquisition, employee involvement, training and development, and other HR-related services.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>
 {/* 2nd */}
            <div className='accordion-item'>
                
          <MuiAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Why do I need Topone Talents for my Business?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Topone Talents can assist you in efficiently managing employee interactions while also complying with regulatory standards. This encompasses everything from developing an HR strategy to conducting job interviews and adhering to workplace safety regulations. HR consultants may also advise on Human Resources (HR) solutions such as human resource software or online HR platforms.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>
            {/* 3nd */}
            <div className='accordion-item'>
            <MuiAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>What are the Benefits of Topone Talents?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Outsourcing your HR Department can be an excellent approach to cutting expenses while increasing productivity. By outsourcing all parts of human resources, from recruiting to retirement planning, you can free up your time to focus on other aspects of the business. Furthermore, outsourcing enables you to adapt swiftly to changes in the market or sector by modifying labour numbers as needed. Outsourcing also guarantees that the quality of human resources services is constant and matches your high expectations. You will also be able to monitor staff performance and spot possible problems early on, allowing them to be rectified before they become serious concerns.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>
            {/* 4nd */}
            <div className='accordion-item'>
            <MuiAccordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>What is included in Topone Talents?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              How much Topone Talents Services costs will depend on a variety of factors, including the size of your business,
               the services you require, and the location of your business.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>
            {/* 5nd */}
            <div className='accordion-item'>
            <MuiAccordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>How can Topone Talents help Startups?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Topone Talents can help your startup improve recruitment and employee retention, identify and address issues early on, provide workplace policies and procedures that are consistent with company culture, and develop effective communication strategies between managers and employees.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>  
              {/* 6nd */}
              <div className='accordion-item'>
            <MuiAccordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>What are the Benefits of using Topone Talents?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              There are many benefits to using Topone Talents. These services can help you improve your employee assessment and evaluation processes, optimize your interviewing processes and selection criteria, develop better worker training and development programs, and manage your wages more effectively.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div> 

              {/* 7nd */}
            <div className='accordion-item'>
            <MuiAccordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>How can Topone Talents help Startups?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Topone Talents can help your startup improve recruitment and employee retention, identify and address issues early on, provide workplace policies and procedures that are consistent with company culture, and develop effective communication strategies between managers and employees.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
            </div>             
            </div>    
        </div>
      </div>
    </>
  )
}

export default CustomAccordion; 
