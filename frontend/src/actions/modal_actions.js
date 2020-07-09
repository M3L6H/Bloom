export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// in order to edit task in edit task modal, passing an optional task
export const openModal = (modal, task) => {
    //debugger;
    return {
        type: OPEN_MODAL,
        modal,
        task
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL,
});