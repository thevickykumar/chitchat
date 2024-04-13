"use client"

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import SettingsModal from "./SettingsModal";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

interface MobileFooterProps {
  currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({
  currentUser
}) => {

  const {routes,showLogoutWarning,setShowLogoutWarning} = useRoutes();
  const { isOpen } = useConversation();
  const [isOpenSetting, SetIsOpenSetting] = useState(false);

  if (isOpen) {
    return null;
  }


  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpenSetting}
        onClose={() => SetIsOpenSetting(false)}
      />

      <LogoutModal
      isOpen={showLogoutWarning}
      onClose={()=>setShowLogoutWarning(false)}
      />

      <div
        className="
        fixed
        w-full
        bottom-0
        z-40
        flex
        justify-evenly
        items-center
        bg-white
        border-t-[1px]
        lg:hidden
    "
      >
        {routes.map((route) => (
          <MobileItem
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        ))}

        <div onClick={() => SetIsOpenSetting(true)}
          className="
            cursor-pointer
            hover:opacity-75
            transition
            mr-5
            mt-1
        "
        >
          <Avatar user={currentUser} />
        </div>
      </div>
    </>
  )
}

export default MobileFooter
