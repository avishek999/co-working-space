import Image from "next/image";
import React from "react";

const FooterSection = () => {
  const footerData = {
    contact: {
     
      email: "marhathackt09@gmail.com",
      since: "2022",
    },
    sections: [
      {
        title: "Platform",
        links: [
          "Analytics",
          "Planning",
          "Collaboration",
          "Data Management",
          "Integrations",
          "Security",
        ],
      },
      {
        title: "Resources",
        links: [
          "Customers",
          "Strategic Finance",
          "Ebooks & Guides",
          "Webinars & Events",
          "Podcast & Video",
        ],
      },
      {
        title: "Company",
        links: [
          "Financial",
          "Investors & CEO’s",
          "Revenue Operations",
          "Sales & Marketing",
          "Human Resources",
        ],
      },
      {
        title: "Legal",
        links: ["Terms", "Privacy", "Cookies", "Licenses", "Contacts"],
      },
    ],
    copyright: "© 2022 WSpace | All Rights Reserved",
  };

  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 py-10 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        <div className="space-y-3 md:w-1/3">
          <Image
            src="/icons/logo-light.png"
            alt="Logo"
            height={51}
            width={171}
          />

          <p className="text-sm">4517 Washington Ave,<br/ > Manchester, Kentucky 39495</p>
          <p className="text-sm">{footerData.contact.email}</p>

          <Image
            src="/icons/logo-light.png"
            alt="Logo"
            height={51}
            width={171}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {footerData.sections.map((section, idx) => (
            <div key={idx} >
              <h3 className="text-white font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-sm hover:text-white cursor-pointer transition"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t flex justify-between px-4 pt-10 border-gray-700 mt-8  text-center text-xs text-white">
        <p className="text-sm uppercase tracking-wide">
          Since {footerData.contact.since}
        </p>
        {footerData.copyright}
      </div>
    </footer>
  );
};

export default FooterSection;
