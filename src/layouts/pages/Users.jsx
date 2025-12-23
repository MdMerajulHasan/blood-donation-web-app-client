import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Users = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [filterStatus, setFilterStatus] = useState();
  const navigate = useNavigate();

  const {
    isLoading: allUsersLoading,
    data: usersData = [],
    refetch,
  } = useQuery({
    queryKey: ["all-users-data"],
    queryFn: async () => {
      const res = await axiosSecure
        .get(`/all-users-data?email=${user?.email}&status=${filterStatus}`)
        .catch((error) => alert(error.message));
      return res.data;
    },
  });

  const handleStatus = (status, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want to ${status} the user?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/user/${email}?email=${user?.email}&status=${status}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              navigate("/dashboard/all-users");
              refetch();
              Swal.fire({
                title: `${status}`,
                text: `Successfully ${status} user!`,
                icon: "success",
              });
            }
          })
          .catch((err) => alert(err.message));
      }
    });
  };

  if (allUsersLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-100 w-11/12 mx-auto space-y-2 md:space-y-5 py-2 md:py-5 mt-5 md:mt-10 rounded-md">
      <h2 className="text-red-600 text-2xl md:text-4xl font-bold text-center">
        All Users
      </h2>
      <div className="overflow-x-auto bg-white w-11/12 mx-auto">
        <table className="table table-zebra table-xs table-pin-rows table-pin-cols text-[10px] md:text-base text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Change Status</th>
              <th>Manage Role</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((r) => (
              <tr key={r._id}>
                {r.photo ? (
                  <td>
                    <img
                      className="w-10 md:w-14 h-10 md:h-14 rounded-md"
                      src={r.photo}
                      alt="user avatar"
                    />
                  </td>
                ) : (
                  <td>
                    <FaUser size={40}></FaUser>
                  </td>
                )}
                <td>{r.email}</td>
                <td>{r.name}</td>
                <td>{r.role}</td>
                <td>
                  {r.status === "active" ? (
                    <button
                      onClick={() => handleStatus("blocked", r.email)}
                      title="block"
                      className="bg-red-600 p-1 rounded-sm text-white"
                    >
                      block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus("active", r.email)}
                      title="Unblock"
                      className="bg-green-600 p-1 rounded-sm text-white"
                    >
                      unblock
                    </button>
                  )}
                </td>
                <td className="flex gap-1 justify-center items-center">
                  {r.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
