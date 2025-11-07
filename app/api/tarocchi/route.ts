import { NextResponse } from "next/server";

import { Tarot } from "./model/tarot";
import tarotList from "../../data/tarotLIst.json";

export default function GET() {
    const tarot: Tarot[] = tarotList
    return NextResponse.json(tarot);
}
