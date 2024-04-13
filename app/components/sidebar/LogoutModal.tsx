import Modal from "../Modal";
import Button from "../Button"
import { signOut } from "next-auth/react";

interface LogoutModalProps{
    isOpen?:boolean;
    onClose:()=>void;
}

const LogoutModal:React.FC<LogoutModalProps> = ({
    isOpen,
    onClose
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <p className="text-xl font-medium p-2">Are you sure you want to log out?</p>
        <div className="flex justify-evenly p-2 mt-5"> 
        <Button onClick={signOut}>Confirm</Button>
        <Button secondary onClick={onClose}>Cancel</Button>
      </div>
    </Modal>
  )
}

export default LogoutModal
