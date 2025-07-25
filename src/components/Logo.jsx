import { Link } from "react-router";

function Logo() {
  return (
    <div className="winstonLogo">
      <Link to={"/"}>
        <img
          className="logoImg"
          src="https://res.cloudinary.com/dfwb8a17z/image/upload/v1750677006/7f919f67-c7c0-4bda-9a5f-4a79c8b2d93a.png"
          alt="logo mono"
        />
      </Link>
      <Link to={"/"}>
        <h3 className="winstonLogoText">WINSTON!</h3>
      </Link>
    </div>
  );
}

export default Logo;
