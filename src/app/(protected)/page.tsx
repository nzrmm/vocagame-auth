import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  return <div>Okee</div>;
};

export default Home;
