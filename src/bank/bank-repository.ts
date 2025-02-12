import { BankUser } from "./user/user";

const db: Array<BankUser> = new Array()

export function clear() {
    db.splice(0, db.length)
}

export function persist(user: BankUser) {
    db.push(user)
}

export function exists(user: BankUser): boolean{
    return db.find(u => u.email === user.email) !== undefined
}