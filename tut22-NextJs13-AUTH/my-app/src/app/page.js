import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const LandingPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>Welcome to My Application</h1>
      <Link href="/api/auth/signout">
        <button
          style={{
            background: "red",
            width: "5rem",
            height: "2rem",
            color: "white",
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
