import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  name: string;
  avatar: string;
  description: string;
};

const TestimonialCard = ({ name, avatar, description }: Props) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center animate-fade-in">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 animate-fade-in-up">
            <h4 className="text-lg font-bold text-[#6F3823]">{name}</h4>
            <p className="text-gray-600">Student</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 animate-fade-in-up">
          &quot;{description}&quot;
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
