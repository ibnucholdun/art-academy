import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User } from "lucide-react";
import LogoutButton from "./LogoutButton";

type Props = {
  user: any;
};

const UserButton: React.FC<Props> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user.image === null ? (
            <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
          ) : (
            <AvatarImage src={user?.image} />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-brown300" align="end">
        <DropdownMenuItem className="hover:bg-white">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem className="hover:bg-white">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
