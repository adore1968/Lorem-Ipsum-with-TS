import { useAppContext } from "../hooks/AppContext";

function LoremForm() {
  const { handleChange, handleSubmit } = useAppContext();
  return (
    <div className="mx-auto min-w-min max-w-xs">
      <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
        <label
          htmlFor="index"
          className="flex items-center text-xl sm:text-2xl"
        >
          Paragraphs:
          <input
            type="number"
            name="index"
            id="index"
            onChange={(e) => handleChange(e)}
            className="ml-1 w-2/4 rounded p-2 text-lg sm:text-xl"
            placeholder="0"
          />
        </label>
        <button
          type="submit"
          className="w-2/4 rounded bg-blue-600 px-4 text-lg uppercase text-white sm:text-xl"
        >
          generate
        </button>
      </form>
    </div>
  );
}

export default LoremForm;
