import useUsers from "../../../hooks/useUsers";
import { addressToString } from "../../../utils/addressToString";

const DummyList = () => {
  const { data: users, isLoading } = useUsers();
  
  return (
    <>
      { isLoading && <div>Loading...</div> }
      { users && users.length && (
        <>
          <ul className="dummy-list">
            {users.map(user => {
              const userAddress = addressToString(user.address);

              return (
                <li key={user.id}>
                  ID: { user.id };<br />
                  Name: { user.name };<br />
                  Address: { userAddress };
                </li>
              );
            })}
          </ul>
        </>
      ) }
    </>
)}

export default DummyList;
