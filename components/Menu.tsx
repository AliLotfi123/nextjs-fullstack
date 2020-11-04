import Link from "next/link";
import MenuCSS from "./Menu.module.scss";

export default function Menu() {
  return (
    <ul className={MenuCSS.menu}>
      <li>
        <Link href="/products/">
          <a>Products</a>
        </Link>
      </li>{" "}
      <li>
        <Link
          href="/products/[category]"
          as={`/products/some-products-category`}
        >
          <a>Some Product Category</a>
        </Link>
      </li>
    </ul>
  );
}
