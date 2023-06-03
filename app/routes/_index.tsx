import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "DEV: Adam Liang" },
    { name: "description", content: "Welcome to my homepage." },
  ];
};

export default function Index() {
  return (
    <div>
      <h2>Welcome to my homepage</h2>
    </div>
  );
}
