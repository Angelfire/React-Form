import * as fs from "fs";

/**
 * Write data in a specified file
 * @param data 
 * @param path 
 */
export function writeToFile (data, path) {
  const json = JSON.stringify(data, null, 2);

  fs.writeFile(path, json, (err) => {
    if (err) {
      console.error(err)
      throw err
    }
  });
}

/**
 * Returns a Universally Unique IDentifier (UUID)
 * https://www.ietf.org/rfc/rfc4122.txt
 */
export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
