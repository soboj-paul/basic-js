"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (num) => {
    if (num > 0 && num <= 25) {
        return "Poor";
    }
    else if (num >= 26 && num <= 55) {
        return "Fair";
    }
    else if (num >= 56 && num <= 85) {
        return "Good";
    }
    return "Excellent";
};
console.log(getSignalStatus(40));
//# sourceMappingURL=p01.js.map