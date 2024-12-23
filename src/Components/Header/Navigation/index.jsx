import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { SiMicrodotblog } from "react-icons/si";
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <IoHomeOutline /> &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiClothes />
                    &nbsp; Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaComputer />
                    &nbsp;Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdBakeryDining /> &nbsp;Bakery
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiFruitBowl /> &nbsp;Grocery
                  </Button>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaMobileAlt />
                    &nbsp;Mobile
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <SiMicrodotblog />
                    &nbsp;Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <IoMdContacts />
                    &nbsp;Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
