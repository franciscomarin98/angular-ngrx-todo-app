import {createAction, props} from "@ngrx/store";

export const createTODO = createAction('[TODO] Create Todo', props<{ texto: string }>());
export const toggleTODO = createAction('[TODO] Toggle Todo', props<{ id: number }>());
