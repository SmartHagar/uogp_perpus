/** @format */

import ProdiTypes from "./ProdiTypes";

// anggota
interface AnggotaTypes {
  id: number | string;
  prodi_id: number | string;
  nama: string;
  NPM: string;
  jenkel: string;
  alamat: number | string;
  no_hp: string;
  foto: string;
  tempat: string;
  tgl_lahir: string;
  prodi: ProdiTypes;
}

export default AnggotaTypes;
