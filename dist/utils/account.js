import { addAddressPadding, getChecksumAddress } from "starknet";
export function formatAddress(addr, { first, last, size = "base", padding = false } = {}) {
    const full = padding ? getChecksumAddress(addAddressPadding(addr)) : addr;
    const { _first, _last } = first !== undefined || last !== undefined
        ? { _first: first ?? 0, _last: last ?? 0 }
        : { _first: sizeLen(size), _last: sizeLen(size) };
    return _first + _last === 0
        ? full
        : full.substring(0, _first + 2) +
            "..." +
            full.substring(full.length - _last);
}
function sizeLen(size) {
    switch (size) {
        case "xs":
            return 4;
        case "sm":
            return 10;
        default:
        case "base":
            return 15;
        case "lg":
            return 20;
    }
}
//# sourceMappingURL=account.js.map