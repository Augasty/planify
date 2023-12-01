// Dashboard.js
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import "./Dashboard.css";

// import fakeProjects from '../fakeProjects'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  const [user] = useAuthState(auth);
  // const projects = fakeProjects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectCollection);
        // console.log(projectSnapshot)

        const projectsData = projectSnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          authorName: doc.data().authorName,
          createdAt: doc.data().createdAt
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    if(user){
      fetchData();
      // console.log('called')
    }

  }, [db,user])
  

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} key={projects.id}/>
        </div>
        <div className="col s12 m5 offset-m1">
          {/* <Notifications/> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;