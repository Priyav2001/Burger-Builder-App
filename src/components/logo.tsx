import pic from "./burgerimg.jpg";
import './Navbar.css'
import { Image } from 'antd';
function Logoimg(){
 return(<Image className="centerimg" width={300} src={pic} alt=""/>);
}
export default Logoimg
