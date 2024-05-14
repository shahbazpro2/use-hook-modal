import { __assign } from "tslib";
/* eslint-disable react-hooks/exhaustive-deps */
import { atom, useAtom } from 'jotai';
import React from 'react';
export var modalAtom = atom({});
export var useModal = function () { return useAtom(modalAtom); };
export var openCloseModalAtom = atom(null, function (get, set, _a) {
    var _b, _c;
    var key = _a.key, status = _a.status, data = _a.data;
    var modal = get(modalAtom);
    if (!status) {
        set(modalAtom, __assign(__assign({}, modal), (_b = {}, _b[key] = {
            status: status,
            data: null,
        }, _b)));
    }
    else {
        set(modalAtom, __assign(__assign({}, modal), (_c = {}, _c[key] = {
            status: status,
            data: data,
        }, _c)));
    }
});
export var getModalAtom = function (key) { return atom(function (get) { return get(modalAtom)[key]; }); };
export var useModalState = function (key) {
    var modalVal = useAtom(React.useMemo(function () { return getModalAtom(key); }, []))[0];
    return modalVal;
};
export var useOpenCloseModal = function () { return useAtom(openCloseModalAtom); };
export var useGetSetModal = function (key) {
    var getModal = useModalState(key);
    var openCloseModal = useOpenCloseModal();
    return [getModal, openCloseModal];
};
//# sourceMappingURL=modal.js.map