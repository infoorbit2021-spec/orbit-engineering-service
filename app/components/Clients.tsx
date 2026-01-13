import { getSheetData } from "../lib/fetchGoogleSheet";
import ClientsMarquee from "./ClientsMarquee";

export default async function Clients() {
  const rows = await getSheetData("Home");

  let clients: string[] = [];

  // rows.forEach((row: any) => {
  //   if (
  //     row.Section?.toLowerCase() === "clientlogos" &&
  //     row.Field === "image"
  //   ) {
  //     try {
  //       const parsed = JSON.parse(row.Value);
  //       if (Array.isArray(parsed)) clients = parsed;
  //     } catch {
  //       console.error("Failed to parse client logos:", row.Value);
  //     }
  //   }
  // });

 rows.forEach((row: any) => {
  if (
    row.Section?.toLowerCase() === "clientlogos" &&
    row.Field === "image"
  ) {
    const raw = row.Value?.trim();
    if (!raw) return;

    let parsed: string[] = [];

    try {
      const json = JSON.parse(raw);
      if (Array.isArray(json)) parsed = json;
    } catch {
      parsed = raw.split(",");
    }

    clients = parsed
      .map(v =>
        v
          .replace(/[\[\]"']/g, "") // remove [, ], ", '
          .trim()
      )
      .filter(Boolean);
  }
});


  return <ClientsMarquee clients={clients} />;
}
