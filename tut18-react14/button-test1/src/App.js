import { App } from "./App";

//tailwind css and react
function Button() {
  return (
    <div className="grid grid-cols-2, place-content-center, p-[100px], bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <>
        <button className="w-30 h-20 "> Click me </button>
      </>
    </div>
  );
}

const app = () => {
  return (
    <>
      <Button />
      <br />
      <Button />
      <br />
      <Button />
    </>
  );
};
export default app;
