"use client";
import FormDelete from "./FormDeleteComponet";
import { fetchUserById } from "@/lib/mongofunction";

export default function UserListComponet({ name, email, gender, id }: any) {
  // console.log(key);
  // console.log(name);
  //   console.log(user, "😊");
  // const [editMode, setEditMode] = useState(false);

  return (
    <li className="bg-white w-[300px] p-3 rounded-lg" id={id}>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{gender}</p>
        <div className="flex gap-4 justify-end">
          <FormDelete id={id} />
          <button
            className="underline text-rose-500"
            onClick={() => {
              fetchUserById(id);
            }}
          >
            수정완료
          </button>

          {/* {editMode ? (
            <button
              className="underline text-rose-500"
              onClick={() => {
                fetchUserById(id);
                setEditMode(!editMode);
              }}
            >
              수정완료
            </button>
          ) : (
            <button
              className="underline text-rose-500"
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              수정
            </button>
          )} */}
        </div>
      </div>
    </li>
  );
}
