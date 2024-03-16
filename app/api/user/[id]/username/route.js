import dbConnect from "../../../../../lib/connect-db";
import User from "../../../../../models/User";

export async function PUT(req, { params }) {
    await dbConnect();
    const { username } = await req.json()
    console.log("PARAMS", params, username)
    try {
        const user = await User.findOneAndUpdate({
            id: params.id
        }, {
            username
        }, {
            new: true,
            passRawResult: true
        });

        return Response.json({ success: true, user })
    } catch (error) {
        console.log(error.code)
        if (error.code === 11000) {
            return Response.json({ success: false, error: "Este usuario se encuentra en uso" });
        } else {
            return Response.json({ success: false, error: "ERROR" });
        }

    }
}
