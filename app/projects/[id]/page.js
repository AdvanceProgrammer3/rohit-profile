import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Project = async ({ params }) => {
  const data = await getData();

  return (
    <div className="max-w-7xl mx-auto p-2">
      {data.map((item) => (
        <div key={item.id}>
          {item.id == params.id && (
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <img src={item.image} alt="" className="w-40 h-40 lg:w-96 " />
              </div>
              <div className=" space-y-10 flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="font-sm">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
