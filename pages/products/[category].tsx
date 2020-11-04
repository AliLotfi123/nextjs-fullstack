import { useRouter } from "next/router";

export default function ProductCategory() {
  const router = useRouter();
  return (
    <div>
      <h1>Category {router.query.category}</h1>
    </div>
  );
}
