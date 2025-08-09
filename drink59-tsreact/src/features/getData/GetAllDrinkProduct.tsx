// Home.tsx
import { Link } from "react-router-dom";
import { AllDrinkData } from "@/data/AllDrinkData";
import CardProduct from "@/components/CardProduct";
import { BeardCrumbTop } from "@/features/beardCrumb";

// Cấu hình các section bạn muốn hiển thị
const sections = [
  { title: "Hot news", type: "coffee", route: "coffee" },
  { title: "On Sale", type: "tea", route: "tea" },
  { title: "Fresh & Cool", type: "smoothie", route: "smoothie" },
];

const AllDrinks = () => {
  return (
    <>
      <BeardCrumbTop />
      {sections.map((section) => {
        const products = AllDrinkData.filter((product) => product.type === section.type);

        if (products.length === 0) return null;

        return (
          <div key={section.type} className='mb-12'>
            <h1 className='text-2xl font-bold ml-[12%] mb-4'>{section.title}</h1>
            <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%]'>
              {products.map((product) => (
                <Link to={`/${section.route}/${product.id}`} key={product.id}>
                  <CardProduct product={product} />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllDrinks;