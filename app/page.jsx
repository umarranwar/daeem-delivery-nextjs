import React from "react";
import HomepageVideo from "./components/server/HomepageVideo";
import HomepageFeatured from "./components/HomepageFeatured";
import Services from "./components/server/Services";
export default function page() {
  return (
    <div>
      <HomepageVideo />
      <HomepageFeatured />
      <Services />
    </div>
  );
}
