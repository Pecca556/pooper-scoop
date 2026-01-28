import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    zipcode: string;
  }>;
}

export default async function ZipcodeRedirectPage(props: Props) {
  const params = await props.params;
  const { zipcode } = params;
  // Redirect to /search, zip will be picked up by usePrefillZip
  redirect("/search");
  return null;
}
