import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog } from "radix-ui";


export const Modal = ({ title, children }) => {
  return (

    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/75" />
      <Dialog.Content
        aria-describedby={undefined}
        className="bg-white rounded-md fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 p-6 w-full md:w-auto h-full md:h-auto md:min-h-[600px] md:min-w-[500px] overflow-y-auto"
      >
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Close asChild>
          <button className="absolute top-4 right-4 cursor-pointer" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

