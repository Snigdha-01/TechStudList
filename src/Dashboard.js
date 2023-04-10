// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
// import { auth, db, logout } from "./firebase";
// import { query, collection, getDocs, where } from "firebase/firestore";
// function Dashboard() {
//   const [user, loading, error] = useAuthState(auth);
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const fetchUserName = async () => {
//     try {
//       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//       const doc = await getDocs(q);
//       const data = doc.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (!user) return navigate("/");
//     fetchUserName();
//   }, [user, loading]);
//   return (
//     <div className="dashboard">
//        <div className="dashboard__container">
//         Logged in as
//          <div>{name}</div>
//          <div>{user?.email}</div>
//          <button className="dashboard__btn" onClick={logout}>
//           Logout
//          </button>
//        </div>
//      </div>
//   );
// }
// export default Dashboard;




import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import image from "./img/2.png";
import { Navbar } from "./components/Navbar";
import { Content } from './components/Content';
import Table from './components/Table';
import { Footer } from './components/Footer';
function Dashboard() {
  const mystyle = {
    width: '100%',
    height: '200vh',
    backgroundImage: `url(${image})`,

  }
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }

  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div>
      <div className="bg-fixed bg-cover bg-center" style={mystyle}>
        {/* Your component's content */}
        <Navbar />
        <Content />
       <Table />
        <div className="bg-fixed bg-cover bg-center" style={mystyle}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Dashboard; 