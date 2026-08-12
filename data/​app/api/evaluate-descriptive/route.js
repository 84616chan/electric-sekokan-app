export async function POST(req) {
  const body = await req.json();
  return Response.json({ score: 100, comment: "素晴らしい回答です！" });
}
