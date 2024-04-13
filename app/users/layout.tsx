import Sidebar from '@/app/components/sidebar/Sidebar'
import getUsers from '../action/getUsers';
import UserList from './components/UserList';
const layout = async ({children}:
  {children : React.ReactNode}) => {

    const users = await getUsers();

  return ( 
    <Sidebar>
     <div className="h-full">
      <UserList items={users}/>
      {children}
     </div>
    </Sidebar>
    
  )
}

export default layout
