import Link from "next/link";

export default function layout() {
  return (
    <>
      <Link href="/home"></Link>
      <Link href="/register"></Link>
      <Link href="/login"></Link>
    </>
  );
}
