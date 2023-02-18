import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data, status } = useSession();

  return (
    <div>
      <form>
        {status === "unauthenticated" ? (
          <button onClick={() => signIn("github")}>로그인</button>
        ) : (
          <>
            {data?.user?.image && (
              <Image
                src={data.user.image}
                alt="profile"
                width={50}
                height={50}
              />
            )}
            <button
              onClick={() =>
                signOut({
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              로그아웃
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Header;
