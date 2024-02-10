const Navbar = () => {
    return (
      <div className="">
      {/* <div className="p-4 md:p-8"> */}
        <div className="text-center mt-4 md:mt-20">
          <h1 className="text-2xl md:text-4xl font-medium text-[#212529]">
            User List
          </h1>
          <p
            className="text-xs md:text-[#212529] mt-2"
            style={{ whiteSpace: "nowrap" }}
          >
            Find out a user.
          </p>
        </div>
      </div>
    );
};

export default Navbar;