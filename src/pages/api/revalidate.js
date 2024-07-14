export default async function handler(_, res) {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CMS_BASE_URL}`);
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  try {
    await res.revalidate("/");
    await res.revalidate("/about-us");
    await res.revalidate("/committees");
    await res.revalidate("/get-involved");
    await res.revalidate("/services");
  } catch (e) {
    res.send({
      status: e.status,
      body: null,
      error: e.message,
    });
  }
}
