import useUsers from "../../../hooks/useUsers";
import { addressToString } from "../../../utils/addressToString";

const DummyTable = () => {
  const { data: users, isLoading } = useUsers();
  
  return (
    <>
      { isLoading && <div>Loading...</div> }
      { users &&
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
            { users.map(user => {
              const userAddress = addressToString(user.address);
              
              return (
              <tr key={ user.id }>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ userAddress }</td>
              </tr>
            )}) }
          </tbody>
        </table>
      }
    </>
  )
}

export default DummyTable
