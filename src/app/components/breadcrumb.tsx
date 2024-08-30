import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";

const CommonBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const home = { icon: "pi pi-home", url: "/" };

  const items: MenuItem[] = segments.map((item, index) => {
    const kapital = item.charAt(0).toUpperCase() + item.slice(1);
    return {
      disabled: index === segments.length - 1,
      template: () => (
        <Link
          key={item}
          href={`/${segments.slice(0, index + 1).join("/")}`}
          aria-label={`Go to ${kapital}`}
        >
          {kapital}
        </Link>
      ),
    };
  });

  return <BreadCrumb home={home} model={items} />;
};

export default CommonBreadcrumbs;
