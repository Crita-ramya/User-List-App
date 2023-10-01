import "./styles.css";
import UserProfile from "./Components/UserProfile/Index";

const UserDetailsList = [
  {
    UniqueNo: 1,
    imageUrl:
      "https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1154642632-612x612_kb8zhf.jpg",
    name: "Ramya",
    role: "Software Engineer"
  },
  {
    UniqueNo: 2,
    imageUrl:
      "https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1154642632-612x612_kb8zhf.jpg",
    name: "Ramya",
    role: "Software Engineer"
  },
  {
    UniqueNo: 3,
    imageUrl:
      "https://res.cloudinary.com/ddsus8zy7/image/upload/v1695986018/istockphoto-1154642632-612x612_kb8zhf.jpg",
    name: "Ramya",
    role: "Software Engineer"
  }
];

const App = () => (
  <div className="List-container">
    <h1 className="title">User List</h1>
    <ul>
      {/* {UserDetailsList.map((eachItem) => (
        <UserProfile ={eachItem} key={eachItem.UniqueNo} /> */}
      {/* ))} */}
      <UserProfile userList={UserDetailsList} />
    </ul>
  </div>
);

export default App;
