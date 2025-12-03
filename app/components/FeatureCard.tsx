import FeatureDialog from "./FeatureDialog";
import { getSheetData } from "../lib/fetchGoogleSheet";
import Link from 'next/link';

export default async function FeatureCard({ feature }: { feature: any }) {
  // Fetch all feature details from Google Sheet
  const featureDetails = await getSheetData("FeatureDetail");

  // Match based on Slug
  const featureDetail = featureDetails.find(
    (item: any) => item.Slug === feature.Slug
  );
 

  return (
    <div style={{ background: feature.background }} className=" p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className=" flex text-xl font-semibold mb-2"> 
        <div
  dangerouslySetInnerHTML={{ __html: feature
    .Icons }}
  className="w-10 h-10 me-6"
></div>
{feature.Title}</h3>
      <p className="text-slate-600 mb-4">
        {feature.ShortDescription ?? feature.Intro ?? feature.Description}
      </p>
      {/* Pass both feature + matched detail */}
      {/* <FeatureDialog feature={featureDetail ?? feature} /> */}
      <Link href="/services" >
       <div
        className="text-blue-600 hover:underline cursor-pointer font-medium"
      >
        Learn More →
      </div>
      </Link>
    </div>
  );
}
