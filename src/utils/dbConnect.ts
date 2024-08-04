"use server";
import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";
import {MongoClient } from "mongodb";


const MONGO_URI: any = process.env.NEXT_PUBLIC_MONGO_URI;


let client: any = null;

export default async function connectToDatabase() {
  if (client) return client;

  if (!MONGO_URI) {
    console.log("MONGO_URI is not found!");
  }

  try {
    client = new MongoClient(MONGO_URI)  
    await client.connect();  
    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}
