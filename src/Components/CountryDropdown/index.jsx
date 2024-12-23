import Button from "@mui/material/Button";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../App";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const context = useContext(MyContext);
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Choose your location</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="LocationModel mt-3"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoMdClose />
        </Button>
        <div className="headerSearch1 w-100">
          <input type="text" placeholder="Search your area" />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList">
          {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              return (
                <li>
                  <Button onClick={() => setisOpenModel(false)}>India</Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
