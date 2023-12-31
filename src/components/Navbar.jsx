import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import ProfileLogo from "../assets/icons/profile.png"
import RaiseFundLogo from "../assets/icons/raise-fund.png"
import LogoutLogo from "../assets/icons/logout.png"

import Login from "../auth/Login";
import Register from "../auth/Register";
import brandLogo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const navigate = useNavigate()
  const [, dispatch] = useContext(UserContext)
  const [state] = useContext(UserContext)
  const [dropdown, setDropdown] = useState(false)

  function logoutUser() {
    navigate("/")
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <div className="navbar bg-red-700 px-4 py-3 md:py-0 md:px-10 flex items-center">
      <div className="flex-1">
        <Link to={"/"}>
          <img src={brandLogo} alt="React Logo" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {state.isLogin ? (
            <>
              <div onClick={() => setDropdown(!dropdown)} className="avatar cursor-pointer ml-3">
                <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                  <img src="https://cloud.jpnn.com/photo/arsip/watermark/2021/02/18/nissa-sabyan-foto-instagramnissa_sabyan-66.jpg" />
                </div>
              </div>

              {dropdown && (
                <div className="absolute z-50 top-20 right-10 p-3 w-[180px] rounded-md bg-white">
                  <div className="">
                    <Link to={"/profile"}>
                      <div className="flex gap-2">
                        <img className="w-7 mb-3" src={ProfileLogo} alt="" />
                        <h1 className="text-black font-semibold">Profile</h1>
                      </div>
                    </Link>
                    <Link to={"/raise-fund"}>
                      <div className="flex gap-2">
                        <img className="w-7 mb-3" src={RaiseFundLogo} alt="" />
                        <h1 className="text-black font-semibold">Raise Fund</h1>
                      </div>
                    </Link>
                    <div onClick={logoutUser} className="flex gap-2 border-t-2 pt-4 cursor-pointer">
                      <img className="w-7 mb-3" src={LogoutLogo} alt="" />
                      <h1 className="text-black font-semibold">Logout</h1>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-[50%] flex flex-row">
              <Login />
              <Register />
            </div>
          )}

        </ul>
      </div>
    </div>
  );
}

export default Navbar;