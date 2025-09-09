import { getDB } from "../db.js";

const collectionName = "estudiantes";

class Camper {
  static async find() {
    const db = getDB();
    return db.collection(collectionName).find().toArray();
  }
}

export default Camper;
