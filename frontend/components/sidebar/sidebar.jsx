import React from 'react';


class Sidebar extends React.Component {
  render() {
    return(
        <Menu
          outerContainerId={"outer-container"}
          pageWrapId={"page-wrap"}
          width={250}
          >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    );
  }
}

export default Sidebar;
