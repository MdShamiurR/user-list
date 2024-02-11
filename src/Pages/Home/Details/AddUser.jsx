
import { useState } from "react";

const AddUser = () => {
    // console.log(
    //   "add user",
    //   typeof addUser !== "undefined" ? typeof addUser : "not defined"
    // );

  const [formData, setFormData] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    companyName: "",
  });

  const formSubmit=()=>{
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avatar: formData.avatar,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        companyName: formData.companyName,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json,"gg"));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    formSubmit();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // You can handle the file as needed (e.g., upload to server, show a preview)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form", formData);
    // Pass the form data to a parent function for further processing
    // addUser(formData);
    // Close the modal
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add User
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form onSubmit={handleSubmit} method="dialog">
              <div className="">
                <div className="card-body grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="form-control w-full">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="file-input file-input-bordered w-full max-w-xs bg-slate-500"
                    />
                  </div>
                  <br />
                  <div className="form-control ">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="input"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control ">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="input"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder=" Your Email"
                      className="input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control ">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address(Street, Suite, City)"
                      className="input"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control ">
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      className="input"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-control mt-24">
                  <input
                    className="btn bg-[#FF3811] text-white"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
              {/* if there is a button in the form, it will close the modal */}
              <button
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddUser;