import "./project.css";
import { BsClockHistory } from "react-icons/bs";
import { GiConcentricCrescents } from 'react-icons/gi'
import { SiConsul } from 'react-icons/si'
import { FaFonticonsFi } from 'react-icons/fa'
import { SiIcons8,SiSimpleicons } from 'react-icons/si'
// const card1 ={
//   icon: "",
//   business:"",
//   conPerson: "",
//   proLead:"",
//   deadline: ""
// }
const card1 ={
  icon: <GiConcentricCrescents/>,
  business:"Sports Interactive",
  conPerson: "Mike Wazowski",
  proLead:"Mike Dawson",
  deadline: 98,
  color:{
    backgroundColor:"rgb(223, 243, 42)"
  }
}

const card2 ={
  icon: <SiConsul/>,
  business:"Homechoice",
  conPerson: "Sergey novo",
  proLead:"Fred sutter",
  deadline: 80,
  color:{
    backgroundColor:"pink"
  }
}

const card3 ={
  icon: <FaFonticonsFi/>,
  business:"Regular logistics",
  conPerson: "ivan Movchan",
  proLead:"Peter novis",
  deadline: 76,
  color:{
    backgroundColor:"red"
  }
}

const card4 ={
  icon: <SiSimpleicons/>,
  business:"Piece studio",
  conPerson: "Martin Fieldman",
  proLead:"Mike stone",
  deadline: 65,
  color:{
    backgroundColor:"white"
  }
}

const card5 ={
  icon: <SiIcons8/>,
  business:"Plural ltd",
  conPerson: "Nina Green",
  proLead:"Bred Reddon",
  deadline: 60,
  color:{
    backgroundColor:"white"
  }
}

const Card = (props) => {
  return (
    <div className="project_container">
      <div className="div_one">
        <span style={props.color}>{props.icon}</span>
        <h1>Sports Interactive</h1>
      </div>
      <p className="para_one">{props.business}</p>
      <p className="para_two">{props.conPerson}</p>
      <div className="progress">
        <div className="progress_bar">
            <div></div>
        </div>
        <span>{props.deadline}%</span>
      </div>
      
        <p className="para_three">
          
            <BsClockHistory />
          
          {props.deadline} days left &nbsp;&nbsp;...
        </p>
     
    </div>
  );
};

const Project = ()=>{

  const projectsArray = [card1,card2,card3,card4,card5]
  const projects =[]
  projectsArray.forEach((project)=>{
    projects.push(<Card icon={project.icon} color={project.color} business={project.business} conPerson={project.conPerson} proLead={project.proLead} deadline={project.deadline}/>)
  })
    return(
        <div id='project_holder'>

          {projects}
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
    )
}
export default Project;
