import { mistralClient } from "@/lib/mistral";

export const dynamic = "force-dynamic";

export async function GET() {
  const models = await mistralClient.models.list();

  if (!models.data) {
    return new Response(JSON.stringify({ error: "Failed to fetch models" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(
    JSON.stringify({ models: models.data?.map((model) => model.name) || [] }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
