

import { useEffect, useState } from "react";
import Details from "../Details/Details";
import ServicesCard from "../Services/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState();

  useEffect(() => {
    // fetch("https://dummyjson.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setServices(data.users);
    //   });
      getAllData();
  }, []);

  const getAllData=()=>{
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.users);
      });
  }

  const filteredData = services.filter((service) =>
    service.firstName.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = filteredData?.sort((item1, item2) => {
    let value1 = "";
    let value2 = "";

    switch (sort) {
      case "1":
        value1 = `${item1.firstName} ${item1.lastName}`.toLowerCase();
        value2 = `${item2.firstName} ${item2.lastName}`.toLowerCase();
        break;
      case "2":
        value1 = item1.email.toLowerCase();
        value2 = item2.email.toLowerCase();
        break;
      case "3":
        value1 = item1.company.name.toLowerCase();
        value2 = item2.company.name.toLowerCase();
        break;
      default:
        break;
    }
    return value1.localeCompare(value2);
  });

  return (
    <div>
      <Details
        setSearch={setSearch}
        search={search}
        sort={sort}
        setSort={setSort}
        setServices={setServices}
        services={services}
      ></Details>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {sortedUsers.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
