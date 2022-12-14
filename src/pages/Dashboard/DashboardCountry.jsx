import React from "react";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgencyCard from "../../components/AgencyCard/AgencyCard";

export default function DashboardCountry() {
  const { country } = useParams();
  const [agencies, setAgencies] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "/agencies",
      method: "get",
      headers: {
        country: country,
      },
    })
      .then((res) => {
        setAgencies(res.data.agencies);
      })
      .catch((res) => console.log(res));
  }, [country]);

  return (
    <div className="agencies-main">
      <div className="agencies-title">
        <img
          src="/icons/arrow-forward-outline.svg"
          alt="arrow-forward-outline"
          onClick={() => navigate(-1)}
        />
        <h1>Agencies {country}</h1>
      </div>
      {agencies ? (
        <div className="agencies">
          {agencies.map((agency) => (
            <AgencyCard
              name={agency.name}
              key={agency._id}
              description={agency.description}
            />
          ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
