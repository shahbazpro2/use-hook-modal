"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetSetModal = exports.useOpenCloseModal = exports.useModalState = exports.getModalAtom = exports.openCloseModalAtom = exports.useModal = exports.modalAtom = void 0;
var tslib_1 = require("tslib");
/* eslint-disable react-hooks/exhaustive-deps */
var jotai_1 = require("jotai");
var react_1 = tslib_1.__importDefault(require("react"));
exports.modalAtom = (0, jotai_1.atom)({});
var useModal = function () { return (0, jotai_1.useAtom)(exports.modalAtom); };
exports.useModal = useModal;
exports.openCloseModalAtom = (0, jotai_1.atom)(null, function (get, set, _a) {
    var _b, _c;
    var key = _a.key, status = _a.status, data = _a.data;
    var modal = get(exports.modalAtom);
    if (!status) {
        set(exports.modalAtom, tslib_1.__assign(tslib_1.__assign({}, modal), (_b = {}, _b[key] = {
            status: status,
            data: null,
        }, _b)));
    }
    else {
        set(exports.modalAtom, tslib_1.__assign(tslib_1.__assign({}, modal), (_c = {}, _c[key] = {
            status: status,
            data: data,
        }, _c)));
    }
});
var getModalAtom = function (key) { return (0, jotai_1.atom)(function (get) { return get(exports.modalAtom)[key]; }); };
exports.getModalAtom = getModalAtom;
var useModalState = function (key) {
    var modalVal = (0, jotai_1.useAtom)(react_1.default.useMemo(function () { return (0, exports.getModalAtom)(key); }, []))[0];
    return modalVal;
};
exports.useModalState = useModalState;
var useOpenCloseModal = function () { var _a; return (_a = (0, jotai_1.useAtom)(exports.openCloseModalAtom)) === null || _a === void 0 ? void 0 : _a[1]; };
exports.useOpenCloseModal = useOpenCloseModal;
var useGetSetModal = function (key) {
    var getModal = (0, exports.useModalState)(key);
    var openCloseModal = (0, exports.useOpenCloseModal)();
    return [getModal, openCloseModal];
};
exports.useGetSetModal = useGetSetModal;
//# sourceMappingURL=modal.js.map