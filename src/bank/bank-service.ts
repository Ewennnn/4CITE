import { exists, persist } from "./bank-repository";
import { BankUser } from "./user/user";

/**
 * Check and save the user.
 * @param user User to save.
 * @returns True if user is saved. Else false.
 */
export function saveBankUser(user: BankUser): boolean {
    if(!isValidUser(user)) {
        return false
    }

    persist(user)
    return exists(user)
}

/**
 * @param user User to validate.
 * @returns True if all conditions to save new user is checked.
 */
function isValidUser(user: BankUser) {
    if(exists(user)) {
        return false
    }

    if(isBlank(user.firstname)) {
        return false
    }

    if(isBlank(user.lastname)) {
        return false
    }

    if (!isValidEmail(user.email)) {
        return false
    }

    return true
}

export function isValidEmail(email: String): boolean {
    if (!containsArobase(email)) {
        return false
    }

    if(containsSpaces(email)) {
        return false
    }

    return true
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

/**
 * @param field Any user String.
 * @returns True if string is blank.
 */
function isBlank(field: String): boolean {
    return field.length === 0
}