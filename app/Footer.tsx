import Logo from "@/shared/Logo/Logo";
import SocialsList1 from "@/shared/SocialsList1/SocialsList1";

interface WidgetMenuItem {
  title: string;
  menus: { href: string; label: string }[];
}

const widgetMenus : WidgetMenuItem[] = [
  {
    title: "Getting started",
    menus: [
      { href: "/", label: "Release Notes" },
      { href: "/", label: "Upgrade Guide" },
      { href: "/", label: "Browser Support" },
      { href: "/", label: "Dark Mode" },
    ],
  },
  {
    title: "Explore",
    menus: [
      { href: "/", label: "Prototyping" },
      { href: "/", label: "Design systems" },
      { href: "/", label: "Pricing" },
      { href: "/", label: "Security" },
    ],
  },
  {
    title: "Resources",
    menus: [
      { href: "/", label: "Best practices" },
      { href: "/", label: "Support" },
      { href: "/", label: "Developers" },
      { href: "/", label: "Learn design" },
    ],
  },
  {
    title: "Community",
    menus: [
      { href: "/", label: "Discussion Forums" },
      { href: "/", label: "Code of Conduct" },
      { href: "/", label: "Contributing" },
      { href: "/", label: "API Reference" },
    ],
  },
];

const renderWidgetMenuItem = (text: WidgetMenuItem) => {
  return (
    <div className="mt-8 lg:mt-0">
      <h2 className="font-semibold text-neutral-700">{text.title}</h2>
      <ul className="mt-5 space-y-3 lg:space-y-4">
        {text.menus.map((v, i) =>
          <li key={i}>
            <a href={v.href} target="_blank"  
              className="hover:text-black">
              {v.label}
            </a>
          </li>
          )}
      </ul>
    </div>
  )
}

const Footer = () => {

  return (
      <div className="border-t">
        <div className={`container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-20`}>
          <div className="grid items-center grid-cols-2 col-span-2 md:grid-cols-4 md:col-span-4 lg:col-span-1 lg:flex lg:flex-col lg:items-start">
            <div className="">
              <Logo />
            </div>
            <div className="lg:mt-5">
              <SocialsList1 className={"gap-3 flex items-center lg:space-x-0 lg:flex-col lg:space-y-2 lg:items-start"}/>
            </div>
          </div>
          {widgetMenus.map(v => renderWidgetMenuItem(v))}
        </div>
      </div>
  );
};

export default Footer;
