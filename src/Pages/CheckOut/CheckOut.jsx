import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service =useLoaderData();
  const { image, firstName, lastName, email, address, company } = service;
  return (
    <div className="p-4 md:p-8">
      <div className="card  bg-base-100 border-gray-400 border rounded-lg">
        <figure className="px-10 pt-10">
          <img src={image} alt="Mission Patch" className="rounded-xl w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <button>
            <p className="">
              <span className="text-[#343A40]">{firstName}</span>
              <span className="text-[#343A40]">&nbsp;{lastName}</span>
            </p>
          </button>

          <h2 className="text-2xl text-[#212529]">{email}</h2>
          <p>
            {address.address},&nbsp;{address.city} <br />
            {address.state}
            <span className="text-[#f74848]">&nbsp;{address.postalCode}</span>
          </p>
          <p className="mt-7 ">
            <span className="font-[barlow]">Company Name:</span> <br />
            <span className="bg-[#198754] text-white p-1 rounded px-3 text-lg select-helvetica">
              {company.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;