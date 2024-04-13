import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { useState } from "react";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const [showLogoutWarning ,setShowLogoutWarning] = useState(false);
  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    {
      label: 'Logout', 
      onClick: () => setShowLogoutWarning(true),
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId]);

  return {routes,showLogoutWarning,setShowLogoutWarning};
};

export default useRoutes; 