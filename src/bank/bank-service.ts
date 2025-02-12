import { use } from "chai";
import { exists, persist } from "./bank-repository";
import { BankUser } from "./user/user";

export function saveBankUser(user: BankUser): boolean {
    if(exists(user)) {
        return false
    }

    if (user.email.indexOf("@") < 0) {
        return false
    }

    if(user.email.indexOf(" ") >= 0) {
        return false
    }

    persist(user)
    return exists(user)
}