import { useState } from "react";
import { useUser, useSessionContext } from "@supabase/auth-helpers-react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Auth = () => {
  const { isLoading, session, error, supabaseClient } = useSessionContext();
  const user = useUser();
  const [authType, setAuthType] = useState<"sign-in" | "sign-up">("sign-in");

  return (
    <div>
      {!user ? (
        <>
          {authType === "sign-in" && (
            <>
              <SignIn />
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer font-medium"
                  onClick={() => setAuthType("sign-up")}
                >
                  Sign Up
                </span>
              </p>
            </>
          )}
          {authType === "sign-up" && (
            <>
              <SignUp />
              <p className="text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-primary cursor-pointer font-medium"
                  onClick={() => setAuthType("sign-in")}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <p>{user.email}</p>
          <button
            onClick={async () => {
              await supabaseClient.auth.signOut();
            }}
            className="button"
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
