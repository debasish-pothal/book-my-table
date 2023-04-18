import Link from "next/link";

export default function RestaurantNavbar() {
  return (
    <nav className="flex text-reg text-black border-b pb-2">
      <Link href="/restaurant/test" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/test/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
