type Modal = {
    [key: string]: {
        status: boolean;
        data: any;
    };
};
export declare const modalAtom: import("jotai").PrimitiveAtom<Modal> & {
    init: Modal;
};
export declare const useModal: () => [Modal, (args_0: Modal | ((prev: Modal) => Modal)) => void];
export declare const openCloseModalAtom: import("jotai").WritableAtom<null, [{
    key: any;
    status: any;
    data: any;
}], void> & {
    init: null;
};
export declare const getModalAtom: (key: string) => import("jotai").Atom<any>;
export declare const useModalState: (key: string) => any;
export declare const useOpenCloseModal: () => (args_0: {
    key: any;
    status: any;
    data: any;
}) => void;
export declare const useGetSetModal: (key: string) => any[];
export {};
