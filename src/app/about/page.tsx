import Header from "../component_header/header";
import Footer from "../component_footer/footer";

export default function About() {
  return (
    <div className="bg-blue-700 mb-9">
      <Header />
      <main>
        <h1 className="font-bold text-2xl items-center p-4 bg-blue-700 text-white">
          nextjs topics:
          <ul className="p-14 bg-blue-500  text-white rounded-md items-center">
            <li>
              <h2 className="text-[20px] ">page.tsx:</h2>
              <p className="text-[15px] pl-8">
                The page.tsx file in Next.js defines a page for a specific route
                in your app. It’s written in TypeScript with React and typically
                contains the main content or layout for that route, like the
                homepage or an About page.
              </p>
            </li>
            <li>
              <h2 className="text-[20px]">layout.tsx:</h2>
              <p className="text-[15px] pl-8">
                The layout.tsx file in Next.js defines a layout that wraps
                around all pages in a specific route or the entire app. It
                allows you to set up a consistent structure, like headers,
                footers, or navigation, that appears on multiple pages.
              </p>
            </li>
            <li>
              <h2 className="text-[20px]">link tag:</h2>
              <p className="text-[15px] pl-8">
                which makes transitions faster and smoother. We use Link instead
                of the regular a tag because Link enables client-side routing,
                keeping the app more responsive by updating the URL and page
                content without reloading everything.
              </p>
            </li>
            <li>
              <h2 className="text-[20px]">components:</h2>
              <p className="text-[15px] pl-8">
                Components are reusable pieces of UI in React and Next.js, like
                buttons, forms, or navigation bars. They let you build and
                organize your app in smaller, manageable parts, making it easier
                to maintain and reuse code.
              </p>
            </li>  
              <li>
              <h2 className="text-[20px]">how to use css in nextjs:</h2>
              <p className="text-[15px] pl-8">
              Use CSS Modules: Scoped styles for individual components e.g., Component.module.css.
              or we can Use global CSS: For styles that apply app-wide, like globals.css.
              or we can use Tailwind CSS: For styles that are not directly related to the apps components or layout.
              </p>   
            </li>
          </ul>
        </h1>
      </main>
      <Footer />
    </div>
  );
}
