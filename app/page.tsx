import { listProperties } from "@/actions/api-actions";
import ActionBar from "@/component/ActionBar";
import Card from "@/component/Card";

export default async function Home() {
  const properties = await listProperties();

  return (
    <main>
      <ActionBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {properties.map((property: any) => (
          <Card key={property.gnaf_pid} property={property} />
        ))}
      </div>
    </main>
  );
}
