import LoremForm from "./components/LoremForm";
import LoremList from "./components/LoremList";

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main>
        <section className="px-6 pt-20">
          <h1 className="mb-5 text-center text-2xl font-bold uppercase sm:text-4xl">
            tired of boring lorem ipsum?
          </h1>
          <LoremForm />
          <LoremList />
        </section>
      </main>
    </div>
  );
}

export default App;
