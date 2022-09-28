import { useRef } from "react";
import { Modal } from "bootstrap";
import ModalChild from "./ModalChild.js";

export default function ModalParent() {
    const ref = useRef();

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem atque iure quaerat ipsum."
    const openModal = () => {
        const modal = new Modal(ref.current, {
            backdrop: true,
            keyboard: true,
            focus: true,
        });
        modal.show();
    };

    const closeModal = () => {
        const modal = Modal.getInstance(ref.current);
        modal.hide();
    };

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <ModalChild ref={ref} closeModal={closeModal} text={text}/>
        </>
    );
}
