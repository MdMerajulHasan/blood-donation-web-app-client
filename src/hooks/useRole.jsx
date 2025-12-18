import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { isLoading: roleLoading, data: role = "donor" } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure
        .get(`/role?email=${user.email}`)
        .then((res) => console.log(res.data));
      return res.data?.role || "donor";
    },
  });

  return { role, roleLoading };
};

export default useRole;
