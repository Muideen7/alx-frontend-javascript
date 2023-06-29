/* eslint-disable */
export default function uploadPhoto(filename) {
    return new Promise((resolve, reject) => {
        return reject(new Error(`${filename} cannot be processed`));
    })
}