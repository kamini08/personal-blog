import { error } from "console";
import dbConnect from "../utils/dbConnect";
import Blog from "../models/Blog";
import { NextResponse } from "next/server";

export default async function GET() {
  await dbConnect();

  try {
    const blogs = await Blog.find({});

    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
