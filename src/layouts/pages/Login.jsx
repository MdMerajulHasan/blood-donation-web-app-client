import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import authImage2 from "../../assets/blood_donation_auth_image.jpeg";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import { BsGoogle } from "react-icons/bs";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const axiosInstance = useAxios();
  const { signInUser, setUser, loading, setLoading, signInWithGoogle } =
    useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const handleDemoLogin = (e) => {
    e.preventDefault();
    const demoEmail = "demoemail@redhelp.com";
    const demoPassword = "Demo123!@";
    setValue("email", demoEmail);
    setValue("password", demoPassword);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          bloodGroup: "",
          district: "",
          upazila: "",
        };
        console.log(userInfo);
        // saving data to database
        axiosInstance
          .post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              alert("User Registered Successfully!");
            }
          })
          .catch((error) => {
            setLoading(false);
            alert(error.message);
          });
        navigate(location?.state || "/");
        setUser(result.user);
      })
      .catch((err) =>
        Swal.fire({
          title: "Google Login Failed!",
          text: err.message,
          icon: "error",
        }),
      );
  };

  const handleLogin = (data) => {
    setLoading(true);
    signInUser(data.email, data.password)
      .then((currentUser) => {
        setUser(currentUser.user);
        navigate(location?.state || "/");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-5 justify-center items-start mt-2 md:mt-10 w-11/12 lg:w-4/5 mx-auto">
      <div className="w-11/12 mx-auto md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-violet-500 text-center my-1 md:my-5">
          Login
        </h2>
        <form className="space-y-1 md:space-y-5">
          <div>
            <legend className="fieldset-legend md:pt-0">Email</legend>
            <label className="input w-full validator">
              <MdOutlineEmail size={20} />
              <input
                type="email"
                {...register("email")}
                className="w-full"
                title="Give Email That You Have Given To Register"
                placeholder="Give Your Mail"
                required
              />
            </label>
            <div className="validator-hint hidden text-sm md:text-base font-bold">
              Enter valid email address
            </div>
          </div>
          <div>
            <legend className="fieldset-legend">Password</legend>
            <label className="input w-full">
              <RiLockPasswordFill />
              <input
                type="password"
                {...register("password")}
                className="w-full"
                required
                placeholder="Type Your Password"
                title="Type Password That Was Created By You"
              />
            </label>
          </div>
          <p className="text-violet-500 font-bold text-xs md:text-sm text-end w-full">
            <a href=""> Forgot Password?</a>
          </p>
          <button
            onClick={handleSubmit(handleLogin)}
            className="bg-violet-500 cursor-pointer hover:opacity-50 text-base md:text-xl font-bold text-white py-1 md:py-2 w-full text-center rounded-md"
          >
            Login
          </button>
          <button
            onClick={handleDemoLogin}
            className="bg-green-500 cursor-pointer hover:opacity-50 text-base md:text-xl font-bold text-white py-1 md:py-2 w-full text-center rounded-md"
          >
            Demo Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 my-1 md:my-5 flex gap-1 items-center justify-center cursor-pointer hover:opacity-50 text-base md:text-xl font-bold text-white py-1 md:py-2 w-full text-center rounded-md"
        >
          Login with Google <BsGoogle></BsGoogle>
        </button>
        <p className="my-1 text-[14px] md:text-base md:my-5 text-center">
          Haven't Any Account?
          <Link
            state={location?.state}
            to="/registration"
            className="m-0 text-violet-500 font-bold"
          >
            Register Now
          </Link>
        </p>
      </div>
      <div className="w-11/12 mx-auto md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-violet-500 text-center my-2 md:my-5">
          Welcome Back
        </h2>
        <img
          className="h-[140px] md:h-[250px] md:w-[400px] mx-auto"
          src={authImage2}
          alt="auth image"
        />
      </div>
    </div>
  );
};

export default Login;
