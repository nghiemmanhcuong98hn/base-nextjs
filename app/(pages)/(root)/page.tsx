import Link from 'next/link';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg">This is the main landing page of the application.</p>
      <Link href="/products/list" className="text-blue-500 hover:underline">
        View Products
      </Link>
    </div>
  );
};

export default Home;
