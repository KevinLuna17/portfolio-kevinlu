import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "@fontsource-variable/onest";
import Works from "./components/Works";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Experience Section */}
      <Experience />
      {/* Works Section */}
      <Works />
      {/* AboutMe Section */}
      <About />
      {/* Footer Section */}
    </div>
  );
}

export default App;
