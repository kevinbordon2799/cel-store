// import { ServerStates } from "@/lib/server-states";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // console.log(request.ip);
    console.log({ name: "Kevin", age: 25 });

    return new NextResponse(JSON.stringify({ msg: "msg" }), { status: 200 });
}

export async function POST(request: NextRequest) {
    // console.log({ body: await request.json() });
    console.log({ request });
    // console.log(request.headers);

    // ServerStates.setTest(ServerStates.getTest() + 1);

    // return new NextResponse(JSON.stringify({ msg: ServerStates.getTest() }), { status: 200 });
    return new NextResponse(JSON.stringify({ msg: "msg" }), { status: 200 });
}