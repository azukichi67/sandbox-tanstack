import { createFileRoute, redirect } from "@tanstack/react-router";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const Route = createFileRoute("/private")({
  component: PrivateComponent,
  beforeLoad: async () => {
    const session = await fetchAuthSession();
    if (!session.tokens) {
      throw redirect({ to: "/" });
    }
  },
});

async function PrivateComponent() {
  const user = await getCurrentUser();
  const session = await fetchAuthSession();

  return (
    <div className="p-2">
      <pre className="text-4xl text-red-500">Private Page</pre>
      <pre className="text-1xl ">{JSON.stringify(user, null, 2)}</pre>
      <pre className="text-1xl ">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
