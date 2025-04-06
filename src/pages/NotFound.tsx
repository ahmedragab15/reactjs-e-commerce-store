import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import Images from "../components/Images";
const NotFound = () => {
  return (
    <>
      <Header />
      <main className="flex justify-evenly items-center py-20">
        <div className="title">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="font-semibold my-4">We couldn’t find the page you are looking for</p>
          <button className="font-semibold text-white bg-orange-400 hover:bg-orange-500 cursor-pointer p-3 rounded-md">
            <Link to="/">Go to Home Page</Link>
          </button>
        </div>
        <div className="img-box">
          <img className="w-lg max-w-full" src={Images.nF} alt="not found image" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
