import { users as staticUsers, type User } from "../shared/schema.js";

// Static user storage for demo purposes
export interface IStorage {
  validateUser(username: string, password: string): Promise<User | null>;
}

export class MemStorage implements IStorage {
  async validateUser(username: string, password: string): Promise<User | null> {
    // Check user1
    if (
      username === staticUsers.user1.username &&
      password === staticUsers.user1.password
    ) {
      return {
        id: staticUsers.user1.id,
        username: staticUsers.user1.username,
        displayName: staticUsers.user1.displayName,
        accessLevel: staticUsers.user1.accessLevel,
      };
    }

    // Check user2
    if (
      username === staticUsers.user2.username &&
      password === staticUsers.user2.password
    ) {
      return {
        id: staticUsers.user2.id,
        username: staticUsers.user2.username,
        displayName: staticUsers.user2.displayName,
        accessLevel: staticUsers.user2.accessLevel,
      };
    }

    return null;
  }
}

export const storage = new MemStorage();
