import { useUserState } from './StateProvider.js';
import ListComponent from '../patterns/ListComponent.js';
import ListItem from '../patterns/ListItem.js';

export default function StateConsumer(props) {
  const { users, getUsers } = useUserState();
  // console.log("users : ", users);
  return (
    <div className='container border my-3'>
      <h4>State Consumer</h4>
      <button onClick={getUsers}>get users</button>
      {
        // (()=>{
        //     if(users){
        //         return (
        //             <ul>
        //                 {
        //                     users.map((item, index) =>{
        //                         return (
        //                             <li key={index+1}>{item.name}</li>
        //                         )
        //                     })
        //                 }
        //             </ul>

        //         )
        //     }
        // })()
        users ? (
          <ListComponent
            items={users}
            resourceName='user'
            itemComponent={ListItem}
          />
        ) : null
      }
    </div>
  );
}
