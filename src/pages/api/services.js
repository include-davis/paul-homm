export default async function fetchServicesData(req, res) {
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
        `${process.env.CMS_BASE_URL}/api/content/services?_published=true`
      )
    ).json();

    if (!response.ok)
      throw new Error(
        `Failed to retrieve services data from CMS.\n${response.error.name}: ${response.error.message}`
      );

    const data = response.body.sort(
      (a, b) => new Date(b._last_modified) - new Date(a._last_modified)
    )[0];

    const regex1 = /^(translators|referrals)_[a-z]{2,3}$/;
    Object.keys(data).forEach((key) => {
      if (!regex1.test(key)) return;
      data[key] = data[key].split(";").map((item) => item.trim());
    });

    const regex2 = /^(slide_\d_items)_[a-z]{2,3}$/;
    Object.keys(data).forEach((key) => {
      if (!regex2.test(key)) return;
      const content_array = data[key].split(";");
      data[key] = {};
      content_array.forEach(
        (item, idx) => (data[key][`${idx + 1}`] = item.trim())
      );
      data[`num_${key.match(regex2)[1]}`] = String(
        Object.keys(data[key]).length
      );
    });

    data.page_media = {};
    data.page_media["slides_section"] = data.services_slides_images.map(
      (image) => ({
        src: image.src,
        alt: image.name,
      })
    );

    const extra_fields = [
      "services_slides_images",
      "unordered_services_slides_images",
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
