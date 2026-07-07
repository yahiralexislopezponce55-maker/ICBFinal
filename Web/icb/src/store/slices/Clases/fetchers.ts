// store/slices/Clases/fetchers.ts
import { CreateFetchers } from '../../../storeConfig';
import { NAME } from './namespace';
import { getData, saveData } from '../../../utilities/Utilities';
import { isError } from '../../../Api/utilsError';

export default CreateFetchers(NAME, {
  async getClases(params?: { url?: string }) {
    // URL por defecto si no llega
    const response = await getData({ url: params?.url || 'http://localhost:3000/api/clase/getClases' });

    if (isError(response?.error)) {
      return { error: response?.error };
    }

    // Aquí devolvemos la propiedad 'clasesInfo', que coincide con el reducer
    return { clasesInfo: response?.data };
  },

  async getClaseById(params: { url: string }) {
    const response = await getData(params);
    if (isError(response?.error)) {
      return { error: response?.error };
    }
    return { claseInfo: response?.data };
  },

  async insertClase(params: { url: string; data: any }) {
    const response = await saveData(params);
    if (isError(response?.error)) {
      return { error: response?.error };
    }
    return { claseInfo: response?.data };
  },

  async updateClase(params: { url: string; data: any }) {
    const response = await saveData(params);
    if (isError(response?.error)) {
      return { error: response?.error };
    }
    return { claseInfo: response?.data };
  },
});