import List from "./_components/List";
import Link from "next/link";

export default function Home() {
  const clicked = true;
  const onClick = () => {
  }
  return (
    <main className="max-w-screen-xl mx-auto p-36">
      <h1 className="font-bold mb-10">get some shit done lazyass</h1>
      <h4>Add something you wanted to do:</h4>
      <List />
    </main>
  )
}
