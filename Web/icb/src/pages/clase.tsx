import { useEffect } from "react";
import { useDispatch, useSelector } from "../store";
import Fetcher from "../store/slices/Clases/fetchers";


interface Clase {
  id_clase: number;
  nombre_clase: string;
   estado: boolean;
}

export default function ClasesPage() {
  const dispatch = useDispatch();

  const clases = useSelector((state: any) => state.clases?.clasesInfo); 
  const error = useSelector((state: any) => state.clases?.error);

  useEffect(() => {
    dispatch(Fetcher.getClases());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Clases</h1>
      {error && <p style={styles.error}>Error al cargar las clases</p>}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {clases && clases.length > 0 ? (
            clases.map((clase: Clase) => (
              <tr key={clase.id_clase} style={styles.tr}>
                <td style={styles.td}>{clase.id_clase}</td>
                <td style={styles.td}>{clase.nombre_clase}</td>
                 <td style={styles.td}>
                  {clase.estado ? "Activo" : "Inactivo"}
            </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={styles.empty}>
                No hay clases registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    padding: "2rem", 
    maxWidth: "800px", 
    margin: "0 auto" 
  },
  title: { 
    fontSize: "1.8rem", 
    marginBottom: "1.5rem", 
    color: "#333" 
  },
  error: { 
    color: "red", 
    marginBottom: "1rem" 
  },
  table: { 
    width: "100%", 
    borderCollapse: "collapse", 
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)" 
  },
  th: { 
    backgroundColor: "#4a90e2", 
    color: "#fff", 
    padding: "12px 16px", 
    textAlign: "left" 
  },
  tr: { 
    borderBottom: "1px solid #ddd" 
  },
  td: { 
    padding: "10px 16px", 
    color: "#444"
  },
  empty: { 
    textAlign: "center", 
    padding: "1rem", 
    color: "#999" 
  },
};