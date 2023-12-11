import React from "react"
function About(props) {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    props.history.push('/login');
  }

    return (
      <div className="Home-first-container">
        <h1>ABout page isLink</h1>
        <button onClick={handleLogout}>Logout</button>

        </div>
    );
}
export default About