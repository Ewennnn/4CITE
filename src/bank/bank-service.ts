import { exists, persist } from "./bank-repository";
import { BankUser } from "./user/user";

export function saveBankUser(user: BankUser): boolean {
    persist(user)
    return exists(user)
}