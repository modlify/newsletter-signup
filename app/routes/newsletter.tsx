import { ActionFunctionArgs, json } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();

  const email = form.get("email");

  await fetch(process.env.WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({ email }),
  });

  return json({ email });
};

export default function Newsletter() {
  return (
    <form method="post">
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
