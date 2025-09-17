import { getDB } from "../db.js";
import { ObjectId } from "mongodb";

const collection = "estudiantes";

class CamperModel {
  static async find() {
    const db = getDB();
    return await db.collection(collection).find().toArray();
  }

  static async findById(id) {
    const db = getDB();
    try {
      return await db.collection(collection).findOne({ _id: new ObjectId(id) });
    } catch (e) {
      return null; // Si el ID no es válido
    }
  }

  static async create(data) {
    const db = getDB();
    const result = await db.collection(collection).insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  static async update(id, data) {
    const db = getDB();
    const result = await db
      .collection(collection)
      .updateOne({ _id: new ObjectId(id) }, { $set: data });

    return result.matchedCount > 0;
  }

  static async delete(id) {
    const db = getDB();
    const result = await db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) });

    return result.deletedCount > 0;
  }
}

export default CamperModel;
