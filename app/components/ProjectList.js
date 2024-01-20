import Project from "./Project";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProjectList = async () => {
  const data = await getData();
  //   console.log(data.length);

  return (
    <div>
      <Project data={data} />
      {/* <Project /> */}
    </div>
  );
};

export default ProjectList;
