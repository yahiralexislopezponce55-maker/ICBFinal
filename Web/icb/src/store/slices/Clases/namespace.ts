// store/slices/Clases/namespace.ts

export const NAME = "clases";

// Tipos de datos
export interface Clase {
  id_clase: number;
  nombre_clase: string;
}

// Estado de Redux para Clases
export interface StoreClases {
  clasesInfo: Clase[];
  claseInfo: Clase | null;
  error: string | null;
}

// Estado inicial
export const INIT: StoreClases = {
  clasesInfo: [],
  claseInfo: null,
  error: null,
};

// Acciones de redux
export const Action = {
  cleanStore: "clases/cleanStore",
  cleanClase: "clases/cleanClase",
  setClase: "clases/setClase",
};