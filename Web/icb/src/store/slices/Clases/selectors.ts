import type { StoreState as RootState } from "../../../store"; // ✅
import type { Clase } from "./namespace";

export default {
  getClases: (state: RootState): Clase[] => state.clases.clasesInfo,
  getClase: (state: RootState): Clase | null => state.clases.claseInfo,
  getError: (state: RootState): string | null => state.clases.error,
};