import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl">Hello Next</h1>
      <p>
        <Link href='/meals'>Meals</Link>
        <Link href='/meals/share'>Share Meal</Link>        
        <Link href='/community'>Community</Link>
      </p>
    </div>
  );
};

export default Home;
