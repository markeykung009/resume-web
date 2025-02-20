import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { switchDarkmode } from "../../../features/darkmodeSlice";

const SwitchTheme = () => {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  return (
    <>
      <Switch
        checked={darkmode}
        onChange={() => dispatch(switchDarkmode())}
        className={`${
          darkmode ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            darkmode ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </>
  );
};

export default SwitchTheme;
