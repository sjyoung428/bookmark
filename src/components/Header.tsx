import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";

const Header = () => {
  const { data, status } = useSession();

  return (
    <div>
      <form>
        {status === "unauthenticated" ? (
          <Button onClick={() => signIn("github")}>로그인</Button>
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
            <Button
              onClick={() =>
                signOut({
                  callbackUrl: "http://localhost:3000",
                })
              }
            >
              로그아웃
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default Header;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
