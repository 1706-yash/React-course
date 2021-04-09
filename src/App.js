import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Form from './components/Form'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import About from './components/About'
import Shop from './components/Shop'
import ParentComp from './components/ParentComp'
import EditUser from './components/EditUser'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import FragmentDemo from './components/FragmentDemo'
import Hero from './components/Hero'
import ComponentC from './components/ComponentC'
import customerList from './components/customerList'
import PortalDemo from './components/PortalDemo';
import { UserProvider } from './components/UserContext';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import withCounter from './components/withCounter';
import User from './components/User';
import ForwardRefParentInput from './components/ForwardRefParentInput';
function App() {
  return (
    // <Router>
    // <div className="App">

    // {/* <ul>
    //   <li><Link to="/">About Page</Link></li>
    //   <li> <Link to="/shop" >Shop Page</Link></li>
    // </ul>
    //   <Switch>
    //   <Route path="/" exact component={About}/>
    //   <Route path="/shop" component={Shop}/>
    //   </Switch> */}
    //   {/* <div className="topnav">
    //   <ul>
    //   <Link to="/">All Customers</Link>
    //   <Link to="/edit/" >Edit Customer</Link>
    //   <Link to="/add-customer" >Add Customer</Link>
    //   <Link to="/fragment">Fragment</Link>
    //   </ul>
    //   </div>
    //   <Switch>
    //   <Route path="/" exact component={customerList}/>
    //   <Route path="/edit/:id" component={EditUser}/>
    //   <Route path="/add-customer" component={PostForm}/>
    //   <Route path="/fragment" component={FragmentDemo}/>
    //   </Switch> */}


     
    // {/* <PostForm></PostForm>
    // <PostList></PostList> */}
    // {/* <Form></Form>
    // <NameList></NameList>
    // <Counter></Counter>
    // <UserGreeting></UserGreeting> */}
    //   {/* <Welcome></Welcome>
    //   <Greet name="Yash Agrawal"></Greet>
    //   <Welcome name="Yash" HeroName="Agrawal"></Welcome>
    //   <Welcome name="Atul" HeroName="Thakre"></Welcome>
    //   <Message></Message> */}
    
    // </div>
    // </Router>


    // Error Boundary
    <div className="App">
     {/* <Hero heroName="Batman" />
     <Hero heroName="Superman" />
      <Hero heroName="Joker" /> */}
     {/* <ParentComp></ParentComp>
     {/* <HookCounter2></HookCounter2> */}
     {/* <HookCounter3></HookCounter3> */}
     {/*<PortalDemo></PortalDemo> */}
     {/* <UserProvider value="Yash">
       <ComponentC/>
     </UserProvider> */}
     {/* <PostForm></PostForm> */}
     <ForwardRefParentInput/>
{/* 
Higher Order Components */}
     {/* <ClickCounter name="Yash"></ClickCounter>
     <HoverCounter name="test"></HoverCounter> */}
    
    {/* Passing function as prop -:- Render Prop */}
     {/* <User name={() => "Yash"} render={(isLoggedIn) => isLoggedIn ? 'Yash' : 'Guest'}></User> */}

    </div>
  );
}

export default App;
