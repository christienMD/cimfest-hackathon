import { Link } from "react-router-dom";
import AuthLogo from "../AuthLogo/AuthLogo";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema
const loginSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{8,15}$/, "Please enter a valid phone number"),
  password: z.string().min(1, "Password is required"),
  keepSignedIn: z.boolean().default(false),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
      keepSignedIn: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Form Data:", data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="w-full md:w-[50%] flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-[453px] px-4 md:px-6">
          {/* Logo and Title */}
          <AuthLogo />

          {/* Sign In Section */}
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-xl md:text-2xl font-medium mb-1">Sign In</h1>
            <p className="text-gray-500 text-sm">Welcome back! Enter your</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div>
              <label className="text-sm text-gray-700 mb-1.5 block">
                Phone number
              </label>
              <input
                {...register("phoneNumber")}
                type="tel"
                placeholder="Phone number"
                className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] transition-colors"
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-1.5 block">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] transition-colors"
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  {...register("keepSignedIn")}
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-[#6E1EFA] focus:ring-[#6E1EFA]"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-500"
                >
                  Keep me signed in
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-[#6E1EFA] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Link to="/home">
              <button
                // type="submit"
                className="w-full h-[46px] bg-[#6E1EFA] text-white rounded-[20px] mt-4 hover:bg-[#5c19d4] hover:opacity-75 transition-colors"
              >
                Login
              </button>
            </Link>

            <div className="text-center text-sm text-gray-500 pt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#6E1EFA] hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex items-center justify-center w-full md:w-[50%] p-4 md:p-8 lg:p-10">
        <div className="w-full max-w-[500px] h-[400px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
          <img
            src="/mixa.png"
            alt="Studio Mixer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
