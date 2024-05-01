import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <h1>Helloooo</h1>
      <Link href="/login">
        <button className="btn btn-blue">Loginn</button>
      </Link>
    </>
  );
}
