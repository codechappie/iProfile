import dbConnect from "../../../lib/connect-db";
import Post from "../../../models/Post";

export async function GET(req, res) {
  await dbConnect();

  try {
    const posts = await Post.find({});
    return Response.json({ success: true, posts })
  } catch (error) {
    console.log(error)
    return Response.json({ success: false });
  }
}

export async function POST(req, res) {
  await dbConnect();
  const body = await req.json()

  try {
    console.log("RE", body, params)
    const post = await Post.create(body);
    return Response.json({ success: true, post });
  } catch (error) {
    return Response.json({ success: false });
  }
}

export async function PUT(req, res) {
  await dbConnect();
  const body = await req.json()

  try {
    console.log("RE", body, params)
    const post = await Post.updateOne(body);
    return Response.json({ success: true, post });
  } catch (error) {
    return Response.json({ success: false });
  }
}