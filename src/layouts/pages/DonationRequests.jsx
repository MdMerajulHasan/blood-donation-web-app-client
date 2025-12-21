import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router";

const DonationRequests = () => {
  const axiosInstance = useAxios();
  const [requests, setRequests] = useState();
  useEffect(() => {
    axiosInstance
      .get("/requests-public")
      .then((res) => setRequests(res.data))
      .catch((err) => alert(err.message));
  }, [axiosInstance]);
  return (
    <>
      {requests?.length > 0 ? (
        <div className="bg-base-200 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
          <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
            Pending Requests
          </h2>
          <div className="overflow-x-auto bg-white w-11/12 mx-auto">
            <table className="table table-zebra text-[10px] md:text-base text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Location</th>
                  <th>Blood Group</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r._id}>
                    <td>{r.recipientName}</td>
                    <td>
                      {r.recipientUpazila},{r.recipientDistrict}
                    </td>
                    <td>{r.bloodGroup}</td>
                    <td>{r.donationDate}</td>
                    <td>{r.donationTime}</td>
                    <td>
                      <Link to={`/request/:${r._id}`} className="flex gap-0.5 lg:gap-2 justify-center items-center">
                        <span>view</span>
                        <span>
                          <CgDetailsMore />
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-base-100 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
          <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
            No Pending Request
          </h2>
        </div>
      )}
    </>
  );
};

export default DonationRequests;
