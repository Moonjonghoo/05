import LoginComponet from "@/components/LoginComponet";
import { fetchUser } from "@/lib/mongofunction";
import UserListComponet from "@/components/UserListComponet";

export default async function Home() {
  const users = await (
    await fetch(`${process.env.LOCAL_URL}/api/users`)
  ).json();
  // const users = await fetchUser();

  return (
    <div>
      Home Component
      <LoginComponet />
      <ul>
        {users.length > 0 &&
          users.map(
            (user: {
              _id: string;
              name: string;
              email: string;
              gender: string;
            }) => (
              <UserListComponet
                id={user._id}
                name={user.name}
                email={user.email}
                gender={user.gender}
              />
            )
          )}
      </ul>
    </div>
  );
}
