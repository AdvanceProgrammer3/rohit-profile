import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Projects() {
  const data = await getData();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-10 px-2 md:px-0">
        {data.map((product) => (
          <div
            key={product.id}
            className="border p-4 flex flex-col items-center"
          >
            <Link href={`/projects/${product.id}`}>
              <img
                className="rounded-t-lg h-40 w-40 hover:scale-105 ease-out duration-300"
                src={product.image}
                alt=""
              />
            </Link>
            <p>{product.title}</p>

            <p className="line-clamp-3">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
