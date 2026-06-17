function Profile() {
  return (
    <div style={{ color: "white" }}>
      <h1>Profile</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "15px",
          marginTop: "20px",
          width: "510px",
        }}
      >
        <h2>Priyanka Dilip</h2>

        <p
          style={{
            color: "#38bdf8",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          MERN Stack Developer
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: "30",
            rowGap:"5px",
            marginBottom:"10px",
          }}
        >
          <p><strong>Email:</strong> priyanka@gmail.com</p>

          <p><strong>Phone:</strong> +91 9876543210</p>

          <p><strong>Location:</strong> Bangalore, India</p>

          <p><strong>Education:</strong> BE Computer Science</p>
        </div>

        <h3>About Me</h3>

        <p>
          Passionate MERN Stack Developer with knowledge of React.js,
          Node.js, Express.js and MongoDB. 
        </p>

        <h3 style={{ marginTop: "20px" }}>Skills</h3>

        <ul>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;