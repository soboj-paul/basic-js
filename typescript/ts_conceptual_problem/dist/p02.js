"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatTicketConfirmation = (user) => {
    return `${user.name}'s ticket for ${user.movie} is comfirmed at ${user.time}`;
};
console.log(formatTicketConfirmation({ name: "Nabila", movie: "Interstellar", time: "9:15 PM" }));
//# sourceMappingURL=p02.js.map