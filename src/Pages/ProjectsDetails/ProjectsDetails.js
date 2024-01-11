import React, { useState , useEffect} from "react";
import './ProjectsDetails.css'
import { useParams } from 'react-router-dom';
import { ProData } from "../../sections/Projects/ProData";
import ProjectsPage_img from '../../assets/projects_img.png'
import FirstSectionOfPages from "../../components/FirstSectionOfPages/FirstSectionOfPages";
import Titles from "../../components/Titles/Titles";
import { FaArrowRightLong, FaGithub ,FaCalendar, FaUser } from "react-icons/fa6";
import Button from "../../components/Button/Button";
// --------carousel--------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectsDetails() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 2,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       initialSlide: 1
        //     }
        //   }
        // ]
    };
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); 

    const [selectedImage, setSelectedImage] = useState(null);
    const handleSelectImage = (image) => {
        setSelectedImage(image)
    }

    const { projectId } = useParams();
    const project = ProData.find(pr => pr.id === parseInt(projectId));
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
        <>
            <FirstSectionOfPages title="Project Post" logo={ProjectsPage_img} />
            <div className="container">
                <Titles title="Project Post" />
                <div className="post_container">
                    <div className="project_details_post"> 
                        <div className="project_image">
                            <img src={!selectedImage ? project.project_image : selectedImage } className='img-fluid' alt="project_card_image" />
                        </div>
                        <div className="image_gallery">
                           <Slider {...settings}>
                                {project.image_gallery.map((image,index)=>{
                                    return(
                                        <img src={image.p6img} key={index} className={selectedImage === image.p6img ? "active_image_gallery" : ""} onClick={()=> handleSelectImage(image.p6img)} />
                                    );
                                })}
                            </Slider>
                        </div>
                        <div className="post_infos d-flex justify-content-between align-items-center">
                            <h2>{project.project_title}</h2>
                            <div className="date_author">
                                <span className="date mx-2"><FaCalendar /> &nbsp; {project.project_date}</span>
                                <span className="author mx-2"><FaUser /> &nbsp; Achraf MR</span>
                            </div>
                        </div>
                        <p>{project.project_details}</p>
                        <p className="tools">
                            <h2 className="text-white">Languages Uses</h2>
                            <span className="keywords">
                            {project.project_desc}
                            </span>
                        </p>
                        <div className="structure">
                            <h2 className="text-white">File Structure</h2>
                            <div>
                                <img src={project.project_structure_img} alt="i haven't added it yet, due to the files structure of the laravel and reactJs Projects" />
                            </div>
                        </div>
                        <div className="link_preview">
                            {/* <h2 className="text-white">Link Preview</h2>
                            <p>This Project is Uploaded in my Github Accout, so if you want to check all my project i invite you to visit my Github Account just <a href="https://github.com/AchrafMR">click Here</a> </p> */}
                            <div className="preview_btn">
                            <Button title="Github" icon={<FaGithub />} link={project.project_link_preview} />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="categories">
                            <h2 className="text-white">Categories</h2>
                            {project.project_categories.map((categorie,index)=>{
                                return(
                                    <span key={index}>{categorie.categorie}</span>
                                );
                            })}
                        </div>
                        <div className="tags">
                            <h2 className="text-white">Tags</h2>
                            {project.project_tags.map((tag,index)=>{
                                return(
                                    <span key={index}>{tag.tag}</span>
                                );
                            })}
                        </div>
                        <div className="sidebar_btn">
                            <Button title="Next Project" icon={<FaArrowRightLong />} link={`/Projects/${project.id+1}`}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsDetails;
