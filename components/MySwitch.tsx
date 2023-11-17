"use client";
import { FC, useEffect, useState } from "react";
import { Switch } from "@/app/headlessui";

const MySwitch = () => {
  const [enabledState, setEnabledState] = useState(false);

  return (
    <Switch
      checked={enabledState}
      onChange={(e: boolean) => {
        setEnabledState(e);
      }}
      className={`${
        enabledState ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`${
          enabledState ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default MySwitch;
