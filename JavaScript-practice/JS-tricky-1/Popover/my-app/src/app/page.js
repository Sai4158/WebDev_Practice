import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <button popovertarget="my-popover">Open Popover</button>

        <div popover id="my-popover">
          Greetings, one and all!
        </div>
      </div>
    </main>
  );
}
