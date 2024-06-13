"use client";
import { addUser } from "@/lib/mongofunction";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function LoginComponet() {
  const [state, formAction] = useFormState(addUser, "");
  const userRef = useRef<any>(null);
  return (
    <>
      <form
        ref={userRef}
        className="flex flex-col gap-4 w-[300px] border-solid border-slate-800 bg-slate-500 p-2"
        action={formAction}
      >
        <input type="text" name="name" placeholder="이름을 입력해주세요" />
        <input type="text" name="email" placeholder="이메일을 입력해주세요" />
        <label htmlFor="gender">
          <input type="radio" name="gender" value="male" />
          남자
        </label>
        <label htmlFor="gender">
          <input type="radio" name="gender" value="female" />
          여자
        </label>
        <button type="submit">제출</button>
      </form>
      {state}
    </>
  );
}
