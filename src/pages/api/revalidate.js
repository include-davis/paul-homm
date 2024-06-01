export default async function handler(_, res) {
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
