import { PersonIcon } from "@radix-ui/react-icons";
import { Dialog } from "radix-ui";

export const HeaderBar = () => {
  return (
    <div className='flex justify-end h-6 shadow-md'>
      <Dialog.Trigger className="cursor-pointer px-1">
        <PersonIcon />
      </Dialog.Trigger>
    </div>
  );
};

