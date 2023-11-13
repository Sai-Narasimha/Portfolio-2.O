import React from "react";
import { Button } from "../atoms/Button";

export const Navbar = () => {
  return (
    <div className="border border-red-900 flex justify-between">
      <div>Profile</div>
      <div>
        <Button label="Resume" />
      </div>
    </div>
  );
};
