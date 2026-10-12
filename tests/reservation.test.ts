import { describe, expect, test } from "vitest";
import { Reservation, User } from "../src/app";

describe("Reservation Tests", () => {
    test("should be able to cancel it's own reservation", () => {
        const user: User = { isAdmin: false };
        const reservation = new Reservation(user);

        expect(reservation.canBeCancelledBy(user)).toBe(true);
    });

    test("should be able to cancel another user reservation as an admin", () => {
        const admin: User = { isAdmin: true };
        const user: User = { isAdmin: false };

        const reservation = new Reservation(user);

        expect(reservation.canBeCancelledBy(admin)).toBe(true);
    })

    test("should not be able to cancel a reservation that doesn't belong to it", () => {
        const owner: User = { isAdmin: false };
        const user: User = { isAdmin: false };

        const reservation = new Reservation(owner);

        expect(reservation.canBeCancelledBy(user)).toBe(false);
    })
})