import type { NextPage } from "next";
import Card from "../components/Card/Card";

import { Header } from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <main className="bg-gradient-to-r from-blue-600 to-blue-500 h-screen">
      <Header />
      <Card />
    </main>
  );
};

export default Home;
