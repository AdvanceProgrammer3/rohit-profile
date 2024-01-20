import Banner from "./components/Banner";
import ProjectList from "./components/ProjectList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Banner />
      <ProjectList />
    </main>
  );
}
