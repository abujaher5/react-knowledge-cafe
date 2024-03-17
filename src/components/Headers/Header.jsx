import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-black max-w-7xl mx-auto mb-7">
      <h1 className="text-4xl font-bold">Knowledge Cafe </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
