import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { CgDetailsMore } from "react-icons/cg";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const MyDonationRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading: allRequestsLoading, data: allRequests = [] } = useQuery({
    queryKey: ["all-own-donation-requests"],
    queryFn: async () => {
      const result = await axiosSecure
        .get("/my-donation-requests")
        .catch((error) => alert(error.message));
      return result.data;
    },
  });
  if (allRequestsLoading) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        {allRequests.length > 0 ? (
          <div className="bg-base-100 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
            <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
              Your All Requests
            </h2>
            <div className="overflow-x-auto bg-white w-11/12 mx-auto">
              <table className="table table-zebra text-[10px] md:text-base text-center">
                {/* head */}
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Blood Group</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allRequests.map((r) => (
                    <tr key={r._id}>
                      <td>{r.recipientName}</td>
                      <td>
                        {r.recipientUpazila},{r.recipientDistrict}
                      </td>
                      <td>{r.donationDate}</td>
                      <td>{r.donationTime}</td>
                      <td>{r.bloodGroup}</td>
                      <td>{r.donationStatus}</td>
                      <td>
                        <div className="flex gap-0.5 lg:gap-2 justify-center items-center">
                          <span>
                            <FaEdit />
                          </span>
                          <span>
                            <RiDeleteBinFill />
                          </span>
                          <span>
                            <CgDetailsMore />
                          </span>
                        </div>
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
              You Have No Request
            </h2>
          </div>
        )}
      </>
    );
  }
};

export default MyDonationRequests;
