import RyMLImage from "../../assets/RyML.png";
import Dogs from "../../assets/Dogs.png";
import GSC from "../../assets/GSC.png"

const projectsData = [
  {
    title: "Global Shapers Cordoba",
    description:"A SINGLE PAGE APPLICATION (SPA) WAS DESIGNED ACCORDING TO THE CLIENT'S REQUIREMENTS, FEATURING A DYNAMIC PAGE WITH JAVASCRIPT, REACT-REDUX, AND NODE.JS, USING SEQUELIZE AND A MYSQL DATABASE. THE INTERFACE IS MANAGEABLE THROUGH A DASHBOARD. THIRD-PARTY AUTHENTICATION, A PAYMENT GATEWAY, USER SUGGESTIONS VIA LOCAL STORAGE, IMAGE LOADING WITH CLOUDINARY, AND EMAIL NOTIFICATIONS WERE IMPLEMENTED. SKILLS INCLUDE GITHUB, SCRUM, TEAMWORK, MYSQL, NODE.JS, REDUX.JS, REACT.JS, SEQUELIZE.JS, HTML5, CSS, AND JAVASCRIPT",
    imageUrl: GSC,
  },
  {
    title: "Rick y Morty",
    description:
      "This project as part of my bootcamp learning was developed with React and Vite using Styled-Components for the front-end consuming a Rick and Morty API to show the characters and their details applying in the back-end Express JS with Node.\nAnd its database with Sequelize and SQL.\nDeploy: Coming soon",
    imageUrl: RyMLImage,
  },
  {
    title: "PI DOGS",
    description: "This project as part of my bootcamp knowledge assessment was developed with React and Vite using Styled-Components for the front-end consuming a Dogs API to show the dog breeds and their details applying Express JS with Node on the back-end and its database with Sequelize and SQL.\nDeploy: Coming soon",
    imageUrl: Dogs,
  },
];

export default projectsData;
