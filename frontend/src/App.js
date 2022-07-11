import NavBar from './Components/NavBar';
import Cards from "./Components/Dashboard/Cards";
import LoginForm from "./Components/LoginForm";
import SignUp from './Components/SignUp'

function App() {
  return (
    <>
      <NavBar/>
      <div className="mt-5 pt-5">

      <LoginForm />
      </div>
    </>
  );
}

export default App;
