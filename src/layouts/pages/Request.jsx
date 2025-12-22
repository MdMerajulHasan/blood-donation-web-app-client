import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Request = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [request, setRequest] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/request/${id}/details`)
      .then((res) => setRequest(res.data))
      .catch((err) => alert(err.message));
  }, [id, axiosSecure]);

  const handleDonate = (id) => {
    console.log(id);
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  };

  return (
    <div className="bg-base-200 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
        Request Details
      </h2>
      <div className="overflow-x-auto bg-white w-11/12 mx-auto">
        <table className="table table-zebra text-[10px] md:text-base text-center">
          {/* head */}
          <tbody>
            <tr>
              <th className="text-[#00000099] text-left">Requester Name</th>
              <td className="text-left">{request.requesterName}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left"> Requester Email</th>
              <td className="text-left">{request.requesterEmail}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Recipient Name</th>
              <td className="text-left">{request.recipientName}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Recipient Location</th>
              <td className="text-left">
                {request.recipientUpazila},{request.recipientDistrict}
              </td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Hospital Name</th>
              <td className="text-left">{request.hospitalName}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Hospital Address</th>
              <td className="text-left">{request.fullAddress}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Blood Group</th>
              <td className="text-left">{request.bloodGroup}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Donation Date</th>
              <td className="text-left">{request.donationDate}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Donation Time</th>
              <td className="text-left">{request.donationTime}</td>
            </tr>
            <tr>
              <th className="text-[#00000099] text-left">Action</th>
              <td className="text-left">
                <button
                  onClick={() => handleDonate(request._id)}
                  className="bg-green-600 text-white px-2 py-1 rounded-md font-bold"
                >
                  Donate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
