import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MainNav } from "./header-links";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { SubMenuDocument } from "../../prismicio-types";
import { isFilledRelatedData } from "@/lib/isFilledRelatedData";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header", { fetchLinks: ["navigation.child_menu"] });
  const layout = await getLayoutData();
  // console.log(layout.data.slices[0]?.primary.sub_menu.data.slices[1].primary);

  return (
    <header className="container z-40 relative">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={header.data.navigation} />
        {/* <SliceZone slices={layout.data.slices} components={components} /> */}
        {/* {layout.data.slices.map((slice) => (
          <div>
            {slice.primary.label}
            {slice.variation === "withSubMenu" &&
              isFilledRelatedData(slice.primary.sub_menu, "sub_menu", "slices") &&
              isSubmenu(slice.primary.sub_menu) &&
              slice.primary.sub_menu.data.slices.map((sub_menu_item) => (
                <div>{sub_menu_item.primary.label}</div>
              ))}
          </div>
        ))} */}
        <nav>
          <Link
            href="/membership"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "px-4")}
          >
            Membership
          </Link>
        </nav>
      </div>
    </header>
  );
}

const isSubmenu = (submenu: object): submenu is SubMenuDocument => {
  return (submenu as SubMenuDocument).data !== undefined;
};

export async function getLayoutData() {
  const client = createClient();

  const layoutData = await client.getSingle("layout", {
    graphQuery: `{
      layout {
        ...layoutFields
        slices {
          ...on menu_item {
            variation {
              ...on default {
                primary {
                  ...primaryFields
                }
              }
              ...on withSubMenu {
                primary {
                  label
                  sub_menu {
                    slices {
                      ...on sub_menu_item {
                      variation {
                        ...on default {
                          primary {
                              ...primaryFields
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
  });

  return layoutData;
}
