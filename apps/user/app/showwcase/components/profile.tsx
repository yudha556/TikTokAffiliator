import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Instagram } from "lucide-react";

export default function Profile() {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="flex flex-row w-full items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
            <h1 className="font-bold text-3xl ">Aldi Nur Cahyono</h1>
            <p className="text-md">Content Creator Tik Tok</p>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <Button variant={"outline"}><Instagram className="w-5 h-5" /></Button>
        <Button variant={"outline"}><Instagram className="w-5 h-5" /></Button>
        <Button variant={"outline"}><Instagram className="w-5 h-5" /></Button>
      </div>
    </div>
  );
}
