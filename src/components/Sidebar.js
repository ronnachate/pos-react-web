import { NavLink } from 'react-router-dom';

import './sidebar.css';

function Sidebar({menuItems}) {
  console.log(menuItems);

  return (
    <>
      <div className="position-sticky pt-3 ms-2">
        <ul className="nav flex-column">
          {
            menuItems.map((item, i) => (
              <li key={i} className="nav-item">
                <NavLink className="nav-link" end to={item.path}>
                  <i className={`bi ${item.icon} pe-2`} />
                  {item.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
