export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// in order to edit task or reward, pass in optional object
export const openModal = (modal, object) => {
          
    return {
        type: OPEN_MODAL,
        modal,
        object
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL,
});