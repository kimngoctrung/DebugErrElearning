import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeScreen from "./Screens/Home/HomeScreen";
import Registration from "./Screens/Registration/Registration";
import UserLogin from "./Component/UserLogin/UserLogin";
import Header from "./Component/Header/Header";
import EditUser from "./Screens/EditUser/EditUser";
import { useSelector } from "react-redux";
import AdditionMem from "./Screens/AdditionMem/AdditionMem";
import DeleteUser from "./Screens/DeleteUser/DeleteUser";
import AdditionCoures from "./Screens/AdditionCoures/AdditionCoures";
import EditCoures from "./Screens/EditCoures/EditCoures";
import UpdatePictureOfCoures from "./Component/UpdatePictureOfCoures/UpdatePictureOfCoures";
import HeaderTemplate from "./Templates/HeaderTemplate";
import DetailAcbKNT from "./Component/DetailAcbKNT/DetailAcbKNT";
import CouresItem from "./Component/CouresItem/CouresItem";
export const history = createBrowserHistory(); //Cho phép điều hướng trang

function App() {
  return (
    <BrowserRouter history={history}>
      <HeaderTemplate path="/" component={HomeScreen} />
      <HeaderTemplate path="/home" component={HomeScreen} />
      <HeaderTemplate path="/detail/:id" component={DetailAcbKNT} />
      <HeaderTemplate path="/login" component={UserLogin} />
      <HeaderTemplate path="/register" component={Registration} />
      <HeaderTemplate path="/edit" component={EditUser} />
      <HeaderTemplate path="/deletemem" component={DeleteUser} />
      <HeaderTemplate path="/addmem" component={AdditionMem} />
      <HeaderTemplate path="/editcoures" component={EditCoures} />
      <HeaderTemplate path="/addcoures" component={AdditionCoures} />
    </BrowserRouter>
  );
}

export default App;
