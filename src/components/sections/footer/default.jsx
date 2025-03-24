import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import DBJlogo from "../../logos/DBJlogo";

export default function FooterSection({
  logo = <DBJlogo className={'text-white'}/>,
  name = "dontbejealous",

  year = new Date().getFullYear(),

  columns = [
    {
      title: "Products",
      links: [
        { text: "Changelog", href: "https://www.dontbej.com/products" },
        { text: "Shop", href: "https://www.www.dontbej.coom/shop" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "https://www.launchuicomponents.com/" },
        { text: "Careers", href: "https://www.launchuicomponents.com/" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Instagram", href: "https://www.instagram.com/dontbej/" },
        { text: "Twitter", href: "https://www.x.com/dontbej/" }
      ],
    },
  ],

  copyright = `© ${year} dontbejealous. All rights reserved`,



  showModeToggle = true
}) {
  return (
    (<footer className="w-full bg-gray-950 text-white z-30">
      <div className="w-full px-4">
        <Footer className={'bg-gray-950  flex justify-center flex-col'}>
          <FooterContent className={'flex justify-center'}>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2 flex-col">
                {logo}
                <h3 className="text-xl font-bold text-white italic">{name}</h3>
              </div>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div className="flex justify-center w-full text-white">{copyright}</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>)
  );
}
