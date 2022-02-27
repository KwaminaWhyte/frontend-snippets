import { Link } from "remix";

const templates = [
  { url: "fashion", name: "Fashion Design" },
  { url: "art-landing", name: "Art Landing Page" },
  { url: "crypto-dashboard", name: "Crypto Dashboard" },
  { url: "chat", name: "Chat" },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      <h1 className="buz-font text-8xl text-center mt-20 mb-20 underline">
        Available Templates
      </h1>

      <section className="flex w-5/6 mr-auto ml-auto flex-wrap justify-evenly">
        {templates.map((template) => (
          <Link className="m-3" to={`${template.url}`} targer="__blank">
            <h3 className="buz-font text-lg">{template.name}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Index;
