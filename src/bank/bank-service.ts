import { use } from "chai";
import { exists, persist } from "./bank-repository";
import { BankUser } from "./user/user";

export function saveBankUser(user: BankUser): boolean {
    if(exists(user)) {
        return false
    }

    if (!containsArobase(user.email)) {
        return false
    }

    if(containsSpaces(user.email)) {
        return false
    }

    persist(user)
    return exists(user)
}

/**
 * @param email User email.
 * @returns True if email contains '@'.
 */
function containsArobase(email: String): boolean {
    return email.indexOf("@") >= 0
}

/**
 * @param email User email.
 * @returns True if email contains ' '.
 */
function containsSpaces(email: String): boolean {
    return email.indexOf(" ") >= 0
}