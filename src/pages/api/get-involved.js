export default async function fetchGetInvolvedData(req, res) {
  if (req.method !== "GET")
    res.send({
      ok: false,
      status: 400,
      body: null,
      error: "Bad request",
    });

  try {
    const response = await (
      await fetch(
        `${process.env.CMS_BASE_URL}/api/content/get-involved?_published=true`
      )
    ).json();

    if (!response.ok)
      throw new Error(
        `Failed to retrieve get involved data from CMS.\n${response.error.name}: ${response.error.message}`
      );

    const data = response.body.sort(
      (a, b) => new Date(b._last_modified) - new Date(a._last_modified)
    )[0];

    data.page_media = {};
    data.page_media["cards_section"] = data.get_involved_cards_images.map(
      (image) => ({
        src: image.src,
        alt: image.name,
      })
    );

    const extra_fields = [
      "get_involved_cards_images",
      "unordered_get_involved_cards_images",
    ];
    extra_fields.forEach((field) => delete data[field]);

    res.send({
      ok: true,
      status: 200,
      body: data,
      error: null,
    });
  } catch (e) {
    res.send({
      ok: false,
      status: 500,
      body: null,
      error: e.message,
    });
  }
}
