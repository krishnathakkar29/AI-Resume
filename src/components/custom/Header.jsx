import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-lg">
      <img src="/logo.svg" width={"50"} height={"50"} />

      {isSignedIn ? (
        <>
          <div className="flex items-center gap-2">
            <Link to={"/dashboard"}>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        </>
      ) : (
        <>
          <Link to="/auth/sign-in">
            <Button>Get Started</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
