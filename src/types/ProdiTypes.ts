/** @format */

import FakultasTypes from "./FakultasTypes";

// prodi
interface ProdiTypes {
  id: number | string;
  fakultas_id: number | string;
  nama: string;
  singkatan: string;
  fakultas: FakultasTypes;
}

export default ProdiTypes;
