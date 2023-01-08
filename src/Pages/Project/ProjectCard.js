// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import "./css/ProjectCard.css";
import {FiExternalLink} from "react-icons/fi"
import { ProjectData } from "../../Assets/data.js";
export default function Carousel() {
  return (
    <div class="cards">
      {ProjectData.map((project) => {
        return (
          <div className="card contact">
            <h3>{project.heading}</h3>
            <span>{project.description}</span>
            <a href={project.link}><FiExternalLink style={{color:"white"}}/></a>
          </div>
        );
      })}
    </div>
  );
}
