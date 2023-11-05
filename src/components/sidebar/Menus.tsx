/** @format */
import {
  BsFillMortarboardFill,
  BsHouseDoorFill,
  BsLampFill,
  BsPeopleFill,
  BsQuestionOctagonFill,
} from "react-icons/bs";
const adminMenus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <BsHouseDoorFill />,
  },
  {
    name: "Katalog",
    href: "/admin/katalog",
    icon: <BsFillMortarboardFill />,
  },
  {
    name: "Anggota",
    href: "/admin/anggota",
    icon: <BsQuestionOctagonFill />,
  },
  {
    name: "Transaksi",
    href: "#",
    slug: "transaksi",
    icon: <BsPeopleFill />,
    subMenus: [
      {
        name: "Peminjaman",
        href: "/admin/transaksi?status=peminjaman",
      },
      {
        name: "Pengembalian",
        href: "/admin/transaksi?status=pengembalian",
      },
    ],
  },
];

export { adminMenus };
