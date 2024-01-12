import img01 from '../../assets/food.png';
import img03 from '../../assets/watches.png';
import img04 from '../../assets/project4.png';
import img05 from '../../assets/portfolio.png';
import img06 from '../../assets/project-stage.png';
import img07 from '../../assets/world_map.png';

import structure_01 from '../../assets/file_structure/file_structure_Food-Ordering.png';
import structure_02 from '../../assets/file_structure/file_structure_watches.png';
import structure_03 from '../../assets/file_structure/file_structure_worldmap.png';
import structure_04 from '../../assets/file_structure/file_structure_Coffe-Website.png';
import structure_05 from '../../assets/file_structure/file_structure_Portfolio.png';
import structure_06 from '../../assets/file_structure/file_structure_projet_stage.png';


// PROJECT 1
import p1img1 from '../../assets/project1/p1img1.png';
// import p1img2 from '../../assets/project1/p1img2.png';
import p1img3 from '../../assets/project1/p1img3.png';
import p1img4 from '../../assets/project1/p1img4.png';
import p1img5 from '../../assets/project1/p1img5.png';
import p1img6 from '../../assets/project1/p1img6.png';
import p1img7 from '../../assets/project1/p1img7.png';
import p1img8 from '../../assets/project1/p1img8.png';
import p1img9 from '../../assets/project1/p1img9.png';
import p1img10 from '../../assets/project1/p1img10.png';
import p1img11 from '../../assets/project1/p1img11.png';

// PROJECT 2
import p2img1 from '../../assets/project2/p2img1.png';
import p2img2 from '../../assets/project2/p2img2.png';
import p2img3 from '../../assets/project2/p2img3.png';
import p2img4 from '../../assets/project2/p2img4.png';
import p2img5 from '../../assets/project2/p2img5.png';
import p2img6 from '../../assets/project2/p2img6.png';
import p2img7 from '../../assets/project2/p2img7.png';
import p2img8 from '../../assets/project2/p2img8.png';
import p2img9 from '../../assets/project2/p2img9.png';
import p2img10 from '../../assets/project2/p2img10.png';

// PROJECT 3
import p3img1 from '../../assets/project3/p3img1.png';
import p3img2 from '../../assets/project3/p3img2.png';
import p3img3 from '../../assets/project3/p3img3.png';

// PROJECT 4
import p4img1 from '../../assets/project4/p4img1.png';
import p4img2 from '../../assets/project4/p4img2.png';
import p4img3 from '../../assets/project4/p4img3.png';
import p4img4 from '../../assets/project4/p4img4.png';
import p4img5 from '../../assets/project4/p4img5.png';
import p4img6 from '../../assets/project4/p4img6.png';
import p4img7 from '../../assets/project4/p4img7.png';


// PROJECT 5
import p5img1 from '../../assets/project5/p5img1.png';
import p5img2 from '../../assets/project5/p5img2.png';
import p5img3 from '../../assets/project5/p5img3.png';
import p5img4 from '../../assets/project5/p5img4.png';
import p5img5 from '../../assets/project5/p5img5.png';
import p5img6 from '../../assets/project5/p5img6.png';

// PROJECT 6
import p6img1 from '../../assets/project6/p6img1.png';
import p6img2 from '../../assets/project6/p6img2.png';
import p6img3 from '../../assets/project6/p6img3.png';
import p6img4 from '../../assets/project6/p6img4.png';
import p6img5 from '../../assets/project6/p6img5.png';
import p6img6 from '../../assets/project6/p6img6.png';
import p6img7 from '../../assets/project6/p6img7.png';
import p6img8 from '../../assets/project6/p6img8.png';
import p6img9 from '../../assets/project6/p6img9.png';
import p6img10 from '../../assets/project6/p6img10.png';

// icons
import { FaReact,FaLaravel,FaHtml5,FaCss3Alt,FaBootstrap,FaFigma, FaGear } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";
import { SiMysql} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const ProData = [
    {
        id: 1,
        image_gallery:[
            {p6img:p1img1},
            {p6img:p1img3},
            {p6img:p1img4},
            {p6img:p1img5},
            {p6img:p1img6},
            {p6img:p1img7},
            {p6img:p1img8},
            {p6img:p1img9},
            {p6img:p1img10},
            {p6img:p1img11},
        ],
        project_image: img01,
        project_date: "12/06/2023",
        project_title: 'Food Ordering website',
        project_desc: [<FaFigma /> , <FaCss3Alt />  , <FaBootstrap />,<FaReact/> ],
        project_details: '"this website is a responsive Food-Ordering site, meticulously designed on Figma and created using React.js, CSS, Bootstrap, and Redux Toolkit. "',

        project_categories:[
            {categorie: "web design"},
            {categorie: "web application"},
            {categorie: "front end"},
            {categorie: "redux¦store"},
            {categorie: "full stack"},
        ],
        project_tags:[
            {tag:"#Food-Ordering-Website"},
            {tag:"#ReactJs"},
            {tag:"#Redux Toolkit"},
            {tag: "#FullStack"},
        ],
        project_structure_img: structure_01 ,
        project_link_preview: 'https://github.com/AchrafMR/Food-Ordering.git',
    },
    {
        id: 2,
        image_gallery:[
            {p6img:p2img1},
            {p6img:p2img2},
            {p6img:p2img3},
            {p6img:p2img4},
            {p6img:p2img5},
            {p6img:p2img6},
            {p6img:p2img7},
            {p6img:p2img8},
            {p6img:p2img9},
            {p6img:p2img10},
        ],
        project_image: img03,
        project_date: "18/09/2022",
        project_title: 'responsive watches website',
        project_desc: [<FaHtml5 />  ,  <FaCss3Alt />  ,<IoLogoJavascript/> ],
        project_details: '"Responsive Watches Website Using HTML CSS & JavaScript , Smooth scrolling in each section , Includes a dark and light mode , Developed first with the Mobile First methodology then for desktop , Compatible with all mobile devices and with a beautiful and pleasant user interface ."',
        project_categories:[
            {categorie: "web design"},
            {categorie: "front end"},
            {tagcategorie: "FullStack"},
        ],
        project_tags:[
            {tag: "#responsive_watches_website"},
            {tag: "#html"},
            {tag: "#Css"},
            {tag: "#javascript"},
           
        ],
        project_structure_img: structure_02,
        project_link_preview: 'https://github.com/AchrafMR/responsive_watches_website',
    },
    {
        id: 3,
        image_gallery:[
            {p6img:p3img1},
            {p6img:p3img2},
            {p6img:p3img3},
        ],
        project_image: img07,
        project_date: "05/07/2023",
        project_title: 'World Map Website Using API',
        project_desc: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript/>, <FaGear/>],
        project_details: 'This web application displays an interactive world map using HTML, CSS, and JavaScript with REST API. the countries api i used it is for free "https://restcountries.com/v3.1/all" .',

        project_categories:[
            {categorie: "web application"},
            {categorie: "back end"},
        ],
        project_tags:[
            {tag: "#WorldMapApplication"},
            {tag: "#Javascript"},
            {tag: "#RestAPI"},
        ],
        project_structure_img: structure_03,
        project_link_preview: 'https://github.com/AchrafMR/World_Map_Adventure',
    },
    {
        id: 4,
        image_gallery:[
            {p6img:p4img1},
            {p6img:p4img2},
            {p6img:p4img3},
            {p6img:p4img4},
            {p6img:p4img5},
            {p6img:p4img6},
            {p6img:p4img7},
           
        ],
        project_image: img04,
        project_date: "10/02/2022",
        project_title: 'coffe website',
        project_desc: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript/>],
        project_details: '" Welcome to my Coffee Website,  Immerse yourself in the world of coffee exploration as you navigate through our user-friendly platform. Discover a visually pleasing interface, crafted with smooth scrolling for easy navigation."',
       
        project_categories:[
            {categorie: "web design"},
            {categorie: "front end"},
        ],
        project_tags:[
            {tag: "#Coffe-Website"},
            {tag: "#html"},
            {tag: "#css"},
            {tag: "#Javascript"},
        ],
        project_structure_img: structure_04,
        project_link_preview: 'https://github.com/AchrafMR/Coffe-Website',
    },
    {
        id: 5,
        image_gallery:[
            {p6img:p5img1},
            {p6img:p5img2},
            {p6img:p5img3},
            {p6img:p5img4},
            {p6img:p5img5},
            {p6img:p5img6},
            
        ],
        project_image: img05,
        project_title: 'Portfolio website',
        project_date: "08/01/2024",
        project_desc: [<FaFigma/>,<FaCss3Alt />, <FaBootstrap />,<FaReact />],
        project_details: '"Welcome to my Portfolio  powered by ReactJS! Explore my digital footprint and professional journey through a seamless and dynamic interface. With the cutting-edge capabilities of ReactJS, this website not only showcases my skills and accomplishments but also offers an engaging and responsive user experience. Dive into a visually appealing design that reflects my unique style and expertise. From project highlights to personal achievements, this portfolio is a testament to my dedication and proficiency in the world of web development."',
       
        project_categories:[
            {categorie: "Front end"},
            {categorie: "Personnel website"},
            {categorie: "FullStack"},
        ],
        project_tags:[
            {tag: "#my_portfolio"},
            {tag: "#Css"},
            {tag: "#Bootstrap"},
            {tag: "#react js"},
        ],
        project_structure_img: structure_05,
        project_link_preview: 'https://github.com/AchrafMR/achraf_mechhour_portfolio',
    },
    {
        id: 6,
        project_image: img06,
        image_gallery:[
            {p6img:p6img1},
            {p6img:p6img2},
            {p6img:p6img3},
            {p6img:p6img4},
            {p6img:p6img5},
            {p6img:p6img6},
            {p6img:p6img7},
            {p6img:p6img8},
            {p6img:p6img9},
            {p6img:p6img10},
           
        ],
        project_title: 'Web Application for employee and leave management ',
        project_date: "01/05/2023",
        project_desc: [<FaLaravel />  , <SiMysql /> ,<FaCss3Alt />, <FaBootstrap />, <FaGear/> ,<BiLogoJquery />],
        project_details: '"is a leave management web application intended to make it easier to manage leave requests for a company s employees. The application is specifically designed for employers who use the employment voucher system and who need to track leave requested by their employees ." ',

        project_categories:[
            {categorie: "web application"},
            {categorie: "back end"},
            {categorie: "full stack"},
        ],
        project_tags:[
            {tag: "#web_application "},
            {tag: "#Laravel"},
            {tag: "#FullStack"},
        ],
        project_structure_img: structure_06,
        project_link_preview: 'https://github.com/AchrafMR/Projet_Stage_App',
    },
]
