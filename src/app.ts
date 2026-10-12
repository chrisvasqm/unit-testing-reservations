export interface User {
    isAdmin: boolean;
}

export class Reservation {
    constructor(public madeBy: User, public date: Date = new Date()) { }

    canBeCancelledBy(user: User): boolean {
        if (user.isAdmin)
            return true;


        if (this.madeBy === user)
            return true;


        return false;
    }
}