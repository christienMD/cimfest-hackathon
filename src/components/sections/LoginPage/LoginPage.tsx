import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="w-full md:w-[50%] flex items-center justify-center p-4 bg-white">
        <div className="w-full max-w-[453px] px-4 md:px-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="p-0.5">
              <img
                src="https://www.figma.com/file/Hw24rKXR9xcsS8NyturKwh/image/8482786bdc2517476ff9f26bc62e5adbf3a5ceb8"
                alt="Afro Coach Logo"
                className="w-10 h-10 md:w-14 md:h-14"
              />
            </div>
            <span className="font-bold text-2xl">AFRO COACH</span>
          </div>

          {/* Sign In Section */}
          <div className="mb-6 md:mb-8 text-center">
            <h1 className="text-xl md:text-2xl font-medium mb-1">Sign In</h1>
            <p className="text-gray-500 text-sm">Welcome back! Enter your</p>
          </div>

          {/* Form */}
          <form className="w-full space-y-4">
            <div>
              <label className="text-sm text-gray-700 mb-1.5 block">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full h-[46px] px-4 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#6E1EFA] focus:ring-1 focus:ring-[#6E1EFA] transition-colors"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
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

            <button
              type="submit"
              className="w-full h-[46px] bg-[#6E1EFA] text-white rounded-[20px] mt-4 hover:bg-[#5c19d4] hover:opacity-75 transition-colors"
            >
              Login
            </button>

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
