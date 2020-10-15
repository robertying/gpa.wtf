import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home: React.FC = ({ children }) => {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    window.location.href = `/search/${query}`;
  };

  useEffect(() => {
    if (router.query.query) {
      setQuery(router.query.query as string);
    }
  }, [router.query.query]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen py-8 dark:bg-gray-900">
      <h1 className="font-medium text-5xl mx-auto text-accent dark:text-purple-500">
        courseX
      </h1>
      <h2 className="font-bold text-4xl mx-auto mt-2 text-center">
        课程信息共享计划
      </h2>
      <form className="space-x-2 h-12 w-full text-center mt-8 md:w-2/3">
        <input
          className="rounded bg-purple-300 placeholder-gray-600 hover:bg-purple-200 focus:bg-purple-200 w-4/6 h-full p-4 text-black"
          placeholder="课程名"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="rounded bg-accent hover:bg-opacity-75 text-white w-1/6 h-full"
          onClick={handleSearch}
        >
          搜索
        </button>
      </form>
      {children}
    </div>
  );
};

export default Home;
