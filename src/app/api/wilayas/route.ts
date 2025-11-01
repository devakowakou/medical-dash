import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

let cachedGeo: any = null;

export async function GET() {
  try {
    if (cachedGeo) {
      return NextResponse.json(cachedGeo, { status: 200 });
    }

    const filePath = path.join(process.cwd(), 'src', 'lib', 'all-wilayas.geojson');
    const raw = await fs.readFile(filePath, 'utf8');
    const json = JSON.parse(raw);
    cachedGeo = json;
    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    console.error('Error reading geojson', err);
    return NextResponse.json({ error: 'Could not load geojson' }, { status: 500 });
  }
}
