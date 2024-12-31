import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
const SideBar = ({ count }) => {
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative">
            <ShoppingCart className="size-[150%]" />
            <div className="absolute top-0 -right-5 w-5 h-5 rounded-full bg-red-500 flex justify-center items-center">
              {count = count?count:0}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 h-screen">
          <DropdownMenuItem>
            <div>Products</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SideBar;
