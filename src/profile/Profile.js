import PropTypes from "prop-types";
const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      borderRadius: "10px",
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      margin: 0,
      marginBottom: "10px",
    },
    bio: {
      fontSize: "18px",
      margin: 0,
      marginBottom: "20px",
    },
    profession: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: 0,
      marginBottom: "20px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleClick = () => {
    alert(`Name: ${fullName}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.name}>{fullName}</h1>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <button style={styles.button} onClick={handleClick}>
        Alert Name
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Ziad Adel",
  bio: "An ex-growth hacker at a YC-backed startup and took the decision to enter the tech field through Engineering and development and he is happier with this decision",
  profession: "Software Engineer",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
