import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {
  fetchAuthSession,
  signInWithRedirect,
  signOut,
} from "aws-amplify/auth";
import { signOutRedirect } from "../lib/cognito/cognit";

export const Route = createRootRoute({
  component: RootComponent,
});

async function RootComponent() {
  const session = await fetchAuthSession();
  const isLogin = !!session.tokens;

  const onClick = isLogin
    ? async () => {
        await signOut();
        signOutRedirect();
      }
    : () => {
        signInWithRedirect({
          options: {
            lang: "ja",
          },
        });
      };

  return (
    <>
      <div className="p-2 flex gap-2">
        <button
          className="p-2 cursor-pointer bg-blue-400 hover:bg-blue-200 font-bold text-white rounded-md"
          onClick={onClick}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
