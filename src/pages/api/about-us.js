export default async function fetchAboutUsData(req, res) {
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
        `${process.env.CMS_BASE_URL}/api/content/about-us?_published=true`
      )
    ).json();

    if (!response.ok)
      throw new Error(
        `Failed to retrieve about-us data from CMS.\n${response.error.name}: ${response.error.message}`
      );

    const data = response.body.sort(
      (a, b) => new Date(b._last_modified) - new Date(a._last_modified)
    )[0];

    for (const key in data) {
      const condition =
        (key.startsWith("sister_clinics") &&
          !key.startsWith("sister_clinics_text")) ||
        (key.startsWith("ucd_clinics") && !key.startsWith("ucd_clinics_text"));

      if (!condition) continue;

      const clinics_array = data[key].split(";");
      data[key] = clinics_array.map((clinic) => ({
        name: clinic.split("-")[0].trim(),
        link: clinic.split("-")[1].trim(),
      }));
    }

    data.page_media = {};
    data.page_media["gallery_section"] = data.aboutus_gallery.map((image) => ({
      src: image.src,
      alt: image.name,
    }));
    data.page_media["history_section"] = data.aboutus_history_cards_images.map(
      (image) => ({
        src: image.src,
        alt: image.name,
      })
    );

    const extra_fields = [
      "aboutus_gallery",
      "aboutus_history_cards_images",
      "unordered_aboutus_gallery",
      "unordered_aboutus_history_cards_images",
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
