// import Image from "next/image";
import Header from "./component_header/header";
import Footer from "./component_footer/footer";

export default function page() {
  return (
    <div>
      <Header />
      <main className="items-center  p-6 px-3 mb-9">
        <h1 className="text-2xl font-sans font-bold p-5">Tailwind css:</h1>
        <p>
          Tailwind CSS is a utility-first CSS framework that provides pre-made
          classes to help you style your application quickly. Instead of writing
          custom CSS, you can use Tailwinds utility classes directly in your
          HTML or JSX to apply styles like padding, margin, colors, font sizes,
          and more.
        </p>
        <ul className="list-disc list-inside p-5 bg-gray-100">
          <h2 className="text-[22px]">Key Features of Tailwind CSS:</h2>
          <li>
            Utility-First: Use small, reusable classes (like p-4, text-center,
            bg-blue-500) to build styles.
          </li>
          <li>
            Customizable: Easily configurable to match your design system or
            brand.
          </li>
          <li>
            Responsive Design: Built-in responsive utilities for different
            screen sizes.
          </li>
          <li>
            Productivity: Allows for faster styling without writing a lot of
            custom CSS.
          </li>
          Tailwind is popular in frameworks like Next.js because it simplifies
          styling, making it easy to achieve a consistent look across the app
          without writing CSS files from scratch.
        </ul>
        <h1 className="text-[25px] font-sans font-bold p-3">
          what are the differences between Tailwind CSS and standard CSS?
        </h1>
        <ul className="list-disc list-inside p-5 bg-gray-100">
          <h2 className="text-[22px]">key difference:</h2>
          <li>
            Speed: Tailwind’s pre-made classes make development faster; standard
            CSS requires custom styling.
          </li>
          <li>
            Customizability: Tailwind is easily configurable through a config
            file; standard CSS gives full control but requires more setup.
          </li>
          <li>
            File Size: Tailwind removes unused styles automatically, keeping
            files small; standard CSS can lead to larger files if unmanaged.
          </li>
          In short, Tailwind is quicker and more efficient, while standard CSS
          offers full control but needs more work.
        </ul>
      </main>
      <Footer />
    </div>
  );
}
