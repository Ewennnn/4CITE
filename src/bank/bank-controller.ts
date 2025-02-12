import { saveBankUser } from "./bank-service";
import { BankUser } from "./user/user";

export function save(user: BankUser): boolean {
    return saveBankUser(user)
}