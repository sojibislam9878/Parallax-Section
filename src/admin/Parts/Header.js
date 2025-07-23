import { NavLink } from 'react-router-dom';
import '../admin.scss';

const Header = ({ navigation }) => {

  return (
    <div className="dashboard-heading-container">
      <div className="dashboard-heading">
        <div className="heading">
          <img className="block-logo" src="https://ps.w.org/parallax-section/assets/icon-128x128.png?rev=2665497" alt="CustomHtmlIcon" />
          <h1 className="heading-title"> Parallax Section Block   </h1>
        </div>
        <div className="plugin-version"> v1.0.9</div>
      </div>

      {/* Links */}
      <div className="navLinks">
        <div className='firstLinks'>
          {
            navigation.map((item, index) => {
              return (<NavLink key={index} to={item.href} className={`links ${({ isActive }) => isActive ? 'active' : ''}`}>
                {item.name} </NavLink>)
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Header;