import { 
  users, 
  contactSubmissions, 
  quoteRequests,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type QuoteRequest,
  type InsertQuoteRequest
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private quoteRequests: Map<number, QuoteRequest>;
  private currentUserId: number;
  private currentContactId: number;
  private currentQuoteId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.quoteRequests = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentQuoteId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = this.currentQuoteId++;
    const quoteRequest: QuoteRequest = {
      ...request,
      id,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }
}

export const storage = new MemStorage();
