import { DiApple } from "react-icons/di";
import { FiShoppingBag } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const headerComponent = () => {
  return (
    <nav>
      <DiApple className="logo" />
      <ul>
        <li>
          <a href="/">Mac</a>
        </li>
        <li>
          <a href="/#"> iphone</a>
        </li>
        <li>
          <a href="/#">ipad</a>
        </li>
        <li>
          <a href="/ab#out">iWatch</a>
        </li>
        <li>
          <a href="/#">Supprt</a>
        </li>
      </ul>
      <div className="icons">
        <IoSearchOutline />
        <RxDividerVertical />
        <FiShoppingBag />
      </div>
    </nav>
  );
};

export default headerComponent;
