/** @format */
import {
  BsHouseDoorFill,
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
    href: "#",
    slug: "katalog",
    icon: <BsPeopleFill />,
    subMenus: [
      {
        name: "Buku",
        href: "/admin/katalog?jenis=buku",
      },
      {
        name: "Jurnal",
        href: "/admin/katalog?jenis=jurnal",
      },
      {
        name: "Tugas Akhir",
        href: "/admin/katalog?jenis=tugas akhir",
      },
    ],
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
