import { DiApple } from "react-icons/di";
import { FiShoppingBag } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const headerComponent = () => {
  return (
    <nav>
      <DiApple className="h-[30px] w-[30px] cursor-pointer items-center" />
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
      <div className="flex cursor-pointer items-center gap-1">
        <IoSearchOutline />
        <RxDividerVertical />
        <FiShoppingBag />
      </div>
    </nav>
  );
};

export default headerComponent;

//className="logo"

// className="icons"
