import React from "react";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { Link, useNavigate } from "react-router";
import useRole from "../../hooks/useRole";

const DashboardHome = () => {
  const { user } = useAuth();
  const { role, roleLoading } = useRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: users = 0 } = useQuery({
    queryKey: ["users-number"],
    enabled: !roleLoading && role === "admin",
    queryFn: async () => {
      const res = await axiosSecure
        .get(`/users-number?email=${user?.email}`)
        .catch((err) => alert(err.message));
      return res?.data;
    },
  });

  const { data: requests = 0 } = useQuery({
    queryKey: ["requests-number"],
    enabled: !roleLoading && role === "admin",
    queryFn: async () => {
      const res = await axiosSecure
        .get(`/requests-number?email=${user?.email}`)
        .catch((err) => alert(err.message));
      return res?.data;
    },
  });

  const {
    isLoading: my3ReqLoading,
    data: my3Req = [],
    refetch,
  } = useQuery({
    queryKey: ["my-recent-three-requests"],
    queryFn: async () => {
      const res = await axiosSecure
        .get("/my-recent-requests")
        .catch((err) => alert(err.message));
      return res.data;
    },
  });

  console.log(role);
  const handleStatus = (status, id) => {
    axiosSecure
      .patch(`/update/${id}/progress?email=${user?.email}`, {
        status,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          navigate("/dashboard/my-donation-requests");
        }
      });
  };

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/delete/${id}?email=${user?.email}`)
      .then((res) => {
        if (res.data.deletedCount) {
          alert("Deleted!");
          navigate("/dashboard/my-donation-requests");
        }
      })
      .catch((error) => alert(error.message));
  };

  if (my3ReqLoading || roleLoading) {
    return <Loading></Loading>;
  } else {
    return (
      <div>
        <div className="text-red-600 md:text-4xl font-bold text-center my-5 md:my-10">
          <Typewriter
            words={[`Welcome ${user.displayName}`]}
            loop
            cursor
          ></Typewriter>
        </div>
        {my3Req.length > 0 && role === "donor" && (
          <div className="bg-base-100 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
            <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
              Recent requests
            </h2>
            <div className="overflow-x-auto bg-white w-11/12 mx-auto">
              <table className="table table-zebra table-xs table-pin-rows table-pin-cols text-[10px] md:text-base text-center">
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
                  {my3Req.map((r) => (
                    <tr key={r._id}>
                      <td>{r.recipientName}</td>
                      <td>
                        {r.recipientUpazila},{r.recipientDistrict}
                      </td>
                      <td>{r.donationDate}</td>
                      <td>{r.donationTime}</td>
                      <td>{r.bloodGroup}</td>
                      <td className="flex gap-1 justify-center items-center">
                        {r.donationStatus === "done" && (
                          <p className="text-white bg-green-600 p-1 rounded-sm">
                            {r.donationStatus}
                          </p>
                        )}
                        {r.donationStatus === "pending" && (
                          <>{r.donationStatus}</>
                        )}
                        {r.donationStatus === "canceled" && (
                          <p className="text-white bg-red-600 p-1 rounded-sm">
                            {r.donationStatus}
                          </p>
                        )}
                        {r.donationStatus === "inprogress" && (
                          <>
                            <button
                              onClick={() => handleStatus("done", r._id)}
                              title="Done"
                              className="bg-green-600 p-1 rounded-sm text-white"
                            >
                              Done
                            </button>
                            <button
                              onClick={() => handleStatus("canceled", r._id)}
                              title="Cancel"
                              className="bg-red-600 p-1 rounded-sm text-white"
                            >
                              Cancel
                            </button>
                            <div>
                              <p>{r.donorName}</p>
                              <p>{r.donorEmail}</p>
                            </div>
                          </>
                        )}
                      </td>
                      <td>
                        <div className="flex gap-0.5 lg:gap-2 justify-center items-center">
                          <Link to={`/dashboard/update/${r._id}`}>
                            <span>
                              <FaEdit />
                            </span>
                          </Link>
                          <button onClick={() => handleDelete(r._id)}>
                            <span>
                              <RiDeleteBinFill />
                            </span>
                          </button>
                          <Link to={`/request/${r._id}`}>
                            <span>
                              <CgDetailsMore />
                            </span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {role === "admin" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5 text-red-600 font-bold text-center">
            <div className="bg-base-100 rounded-md p-5">
              <h2 className="text-2xl md:text-4xl">Total User</h2>
              <p className="text-xl md:text-2xl">{users}</p>
            </div>
            <div className="bg-base-100 rounded-md p-5">
              <h2 className="text-2xl md:text-4xl">Total Funding</h2>
              <p className="text-xl md:text-2xl">0</p>
            </div>
            <div className="bg-base-100 rounded-md p-5">
              <h2 className="text-2xl md:text-4xl">Total Request</h2>
              <p className="text-xl md:text-2xl">{requests}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default DashboardHome;
