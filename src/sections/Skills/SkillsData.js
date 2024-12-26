// react icon
import { FaReact,FaLaravel,FaHtml5,FaCss3Alt,FaPython,FaBootstrap,FaFigma, FaWordpress, FaSymfony } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot,SiDocker } from "react-icons/si";

import { BiLogoJquery } from "react-icons/bi";
import { SiMysql,SiMongodb,SiPhp, SiMicrosoftsqlserver, SiPostgresql, SiTailwindcss } from "react-icons/si";

export const SkillsData = [
    {
        skill_icon: <FaReact />,
        skill_icon_color: '#61dcfb85',
        skill_icon_border: '#61dcfb',
        skill_name: 'react',
        skill_percentage: '80%',
        skill_desc: 'React.js is a JavaScript library for building user interfaces with a focus on component-based and declarative development.',
    },
    {
        skill_icon: <FaLaravel />,
        skill_icon_color: '#f0544285',
        skill_icon_border: '#f05442',
        skill_name: 'laravel',
        skill_percentage: '90%',
        skill_desc: 'Laravel is a PHP web application framework that prioritizes simplicity, elegance, and developer productivity.',
    },
    {
        skill_icon: <FaSymfony />,
        skill_icon_color: '#474a8a85',
        skill_icon_border: '#DED6D3',
        skill_name: 'Symofny',
        skill_percentage: '85%',
        skill_desc: 'Symfony: PHP framework for scalable, robust web applications with reusable components and strong community support.',
    },
    {
        skill_icon: <SiSpringboot />, // Correct Spring icon
        skill_icon_color: '#4db33d85',
        skill_icon_border: '#4db33d',
        skill_name: 'Spring Boot', // Updated from Symfony to Spring Boot
        skill_percentage: '75%', // Same as the original object
        skill_desc: 'Spring Boot: Java framework for building production-ready, stand-alone, and enterprise-grade applications with ease.', // Updated description
    },
    {
        skill_icon: <FaHtml5 />,
        skill_icon_color: '#e34c2685',
        skill_icon_border: '#e34c26',
        skill_name: 'html',
        skill_percentage: '98%',
        skill_desc: 'HTML (Hypertext Markup Language) is the standard markup language for creating and structuring content on the World Wide Web.',
    },
    {
        skill_icon: <SiDocker />, // Correct Docker icon
        skill_icon_color: '#2496ed85',
        skill_icon_border: '#2496ed',
        skill_name: 'Docker',
        skill_percentage: '85%',
        skill_desc: 'Docker: Platform for developing, shipping, and running applications in containers to ensure consistent environments across systems.',
    },

    {
        skill_icon: <FaCss3Alt />,
        skill_icon_color: '#264ce485',
        skill_icon_border: '#264ce4',
        skill_name: 'css',
        skill_percentage: '95%',
        skill_desc: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation and layout of HTML documents on the World Wide Web.',
    },
    {
        skill_icon: <SiTailwindcss />,
        skill_icon_color: '#00749c85',
        skill_icon_border: '#00749c',
        skill_name: 'Tailwind css',
        skill_percentage: '70%',
        skill_desc: 'A utility-first CSS framework that provides a set of pre-designed classes to build custom user interfaces quickly and efficiently without writing custom CSS. It emphasizes flexibility and responsive design.',
    },
    {
        skill_icon: <FaBootstrap />,
        skill_icon_color: '#ae4dff85',
        skill_icon_border: '#ae4dff',
        skill_name: 'Bootstrap',
        skill_percentage: '95%',
        skill_desc: 'Bootstrap is a popular open-source front-end framework for building responsive and mobile-first websites and web applications.',
    },
    {
        skill_icon: <FaFigma />,
        skill_icon_color: '#ff3b0085',
        skill_icon_border: '#ff3b00',
        skill_name: 'Figma',
        skill_percentage: '75%',
        skill_desc: 'Figma is a collaborative web-based design and prototyping tool used for creating user interfaces, user experiences, and interactive designs.',
    },
    {
        skill_icon: <IoLogoJavascript />,
        skill_icon_color: '#ffd53b85',
        skill_icon_border: '#ffd53b',
        skill_name: 'Javascript',
        skill_percentage: '90%',
        skill_desc: 'JavaScript is a versatile and widely-used programming language for web development, enabling dynamic and interactive content on websites.',
    },
    {
        skill_icon: <BiLogoJquery />,
        skill_icon_color: '#0868ac85',
        skill_icon_border: '#0868ac',
        skill_name: 'Jquery',
        skill_percentage: '85%',
        skill_desc: 'jQuery is a fast and lightweight JavaScript library designed to simplify client-side scripting and DOM manipulation in web development.',
    },
    {
        skill_icon: <SiMysql />,
        skill_icon_color: '#f2911185',
        skill_icon_border: '#f29111',
        skill_name: 'Mysql',
        skill_percentage: '90%',
        skill_desc: 'MySQL is a popular open-source relational database management system (RDBMS) widely used for storing and managing structured data.',
    },
    {
        skill_icon: <SiMicrosoftsqlserver />,
        skill_icon_color: '#474a8a85',
        skill_icon_border: '#DED6D3',
        skill_name: 'Microsoft SQL Server ',
        skill_percentage: '75%',
        skill_desc: ' A Microsoft-developed relational database system designed for enterprise-level applications with strong integration and analytics capabilities.',
    },

    {
        skill_icon: <SiPostgresql />,
        skill_icon_color: '#00749c85',
        skill_icon_border: '#00749c',
        skill_name: 'Postgre sql',
        skill_percentage: '70%',
        skill_desc: 'An open-source, highly extensible relational database system with advanced features for complex queries and scalability.',
    },
    {
        skill_icon: <SiMongodb />,
        skill_icon_color: '#4db33d85',
        skill_icon_border: '#4db33d',
        skill_name: 'MongoDb',
        skill_percentage: '75%',
        skill_desc: 'MongoDB is a NoSQL database system known for its flexible and scalable document-oriented approach to data storage.',
    },
    {
        skill_icon: <SiPhp />,
        skill_icon_color: '#474a8a85',
        skill_icon_border: '#474a8a',
        skill_name: 'Php',
        skill_percentage: '95%',
        skill_desc: 'PHP is a server-side scripting language designed for web development, used to create dynamic and interactive web pages.',
    },
    {
        skill_icon: <FaPython />,
        skill_icon_color: '#ffd53b85',
        skill_icon_border: '#ffd53b',
        skill_name: 'python',
        skill_percentage: '70%',
        skill_desc: 'Python is a versatile and powerful high-level programming language known for its simplicity and readability.',
    },
    {
        skill_icon: <FaWordpress />,
        skill_icon_color: '#00749c85',
        skill_icon_border: '#00749c',
        skill_name: 'WordPress',
        skill_percentage: '55%',
        skill_desc: 'Python is a versatile and powerful high-level programming language known for its simplicity and readability.',
    }
]