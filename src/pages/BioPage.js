import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { directors } from "../utils/teamData";

const BioPage = () => {
  const [page, setPage] = useState({});
  const { personId } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
    const active = directors.find((item) => item.person === personId);
    setPage(active);
  }, []);

  console.log(page, personId, useParams());

  return (
    <div className="bio-page">
      <div className="section-center">
        <div className="left">
          <img src={page.image} alt={page.image} />
        </div>
        <div className="right">
          <div className="desc">
            {page?.data?.map((item) => (
              <p>{item}</p>
            ))}
          </div>

          <h2>{page.name}</h2>
          <h3>{page.position}</h3>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
