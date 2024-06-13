"use client";
import { deleteUser } from "@/lib/mongofunction";

export default function FormDelete({ id }: any) {
  console.log(id);
  return (
    <>
      <form
        action={async () => {
          deleteUser(id);
        }}
      >
        <button className="underline text-rose-500">삭제</button>
      </form>
    </>
  );
}
