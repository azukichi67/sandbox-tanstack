import { createFileRoute, redirect } from "@tanstack/react-router";
import { fetchAuthSession } from "aws-amplify/auth";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: async () => {
    const session = await fetchAuthSession();
    if (session.tokens) {
      throw redirect({ to: "/private" });
    }
  },
});

function HomeComponent() {
  return (
    <div className="p-2">
      <div className="text-4xl">Public Page</div>
    </div>
  );
}
