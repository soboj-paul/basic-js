"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateWeeklySteps(steeps) {
    if (steeps.length === 0) {
        return 0;
    }
    return steeps.reduce((acc, steep) => acc + steep, 0);
}
console.log(calculateWeeklySteps([]));
//# sourceMappingURL=p03.js.map