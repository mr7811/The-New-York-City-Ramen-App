import  {Link} from 'react-router-dom'
import './Navbar.css'
import './Layout.css'

function Navbar(){
return(
    <>
<Link to ='/RamenList' id='nav-ramenList'><button class ='nav-ramen'> NYC Ramen list</button></Link>
<Link to ='/' id='nav-home'><button class='nav-home'>Home</button></Link>
</>
);
}
export default Navbar;

