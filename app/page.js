import Image from "next/image";
//this is the server part
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
    </main>
  );
}
