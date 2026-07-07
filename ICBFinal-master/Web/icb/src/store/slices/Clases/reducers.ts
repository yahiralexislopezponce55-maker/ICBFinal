import { CreateReducer } from "../../../storeConfig";
import { INIT, Action } from "./namespace";
import Fetcher from "./fetchers";

export default CreateReducer(INIT, ({ addCase }) => {

    addCase(Action.cleanStore, (state) => ({
        ...state,
        ...INIT
    }));

    addCase(Action.cleanClase, (state) => ({
        ...state,
        claseInfo: INIT.claseInfo,
    }));

    addCase(Action.setClase, (state, { payload }) => ({
        ...state,
        claseInfo: payload,
    }));

    addCase(Fetcher.getClases.fulfilled, (state, { payload }) => ({
        ...state,
        clasesInfo: payload.clasesInfo ?? [],
    }));

});