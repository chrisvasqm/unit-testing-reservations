export interface User {
    isAdmin: boolean;
}

export class Reservation {
    constructor(public madeBy: User, public date: Date = new Date()) { }

    canBeCancelledBy(user: User): boolean {
        return user.isAdmin || this.madeBy === user;
    }
}