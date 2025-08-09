// BeardCrumbTop.tsx
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function BeardCrumbTop() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb  className='ml-[10%] mb-4'>
      <BreadcrumbList>
        <BreadcrumbItem className="text-xl">
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((seg, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <BreadcrumbItem key={path} className="text-xl">
              <BreadcrumbSeparator />
              {isLast ? (
                <BreadcrumbPage>{capitalize(seg)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={path}>{capitalize(seg)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}