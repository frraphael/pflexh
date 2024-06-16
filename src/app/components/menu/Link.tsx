import Link from "next/link";

const Links = ({ links }: { links: { anchor: string; text: string }[] }) => {
  return (
    <>
      {links.map((link, index) => (
        <li className="hover:border-b-2 hover:shadow-xl border-red-900 cursor-pointer ">
          <Link href={link.anchor}>{link.text}</Link>
        </li>
      ))}
    </>
  );
};

export default Links;
