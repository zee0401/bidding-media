import { bids } from "@/db/schema";
import { database } from "@/db/database";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <form
        action={async (formData: FormData) => {
          "use server";
          await database?.insert(bids).values({});
        }}
      >
        <input name="bid" placeholder="Bid" />
        <Button type="submit">place Bid</Button>
      </form>
    </main>
  );
}
