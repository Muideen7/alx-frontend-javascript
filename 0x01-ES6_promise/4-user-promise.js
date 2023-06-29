/* eslint-disable */

export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        return resolve({
            firstName: firstName,
            lastName: lastName
        })
    })
}