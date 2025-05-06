/** @format */
import { BsHouseDoorFill, BsLampFill, BsPeopleFill } from "react-icons/bs";
const menus = [
  {
    name: "Beranda",
    href: "/",
    icon: <BsHouseDoorFill />,
  },

  // {
  //   name: "Profil",
  //   href: "#",
  //   slug: "profil",
  //   icon: <BsPeopleFill />,
  //   subMenus: [
  //     {
  //       name: "Sejarah",
  //       href: "/profil/sejarah",
  //     },
  //     {
  //       name: "Visi Misi",
  //       href: "/profil/visiMisi",
  //     },

  //     {
  //       name: "Tata Tertip",
  //       href: "/profil/tataTertib",
  //     },
  //   ],
  // },

  {
    name: "Keanggotaan",
    href: "/keanggotaan/",
    icon: <BsHouseDoorFill />,
  },

  {
    name: "Katalog",
    href: "#",
    slug: "katalog",
    icon: <BsPeopleFill />,
    subMenus: [
      {
        name: "Buku",
        href: "/katalog?jenis=buku/",
      },
      {
        name: "Jurnal",
        href: "/katalog?jenis=jurnal/",
      },
      {
        name: "Tugas Akhir",
        href: "/katalog?jenis=tugas akhir/",
      },
    ],
  },
];

export default menus;
