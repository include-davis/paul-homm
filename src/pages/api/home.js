export default async function fetchHomepageData(req, res) {
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
        `${process.env.CMS_BASE_URL}/api/content/home?_published=true`
      )
    ).json();

    if (!response.ok)
      throw new Error(
        `Failed to retrieve homepage data from CMS.\n${response.error.name}: ${response.error.message}`
      );

    const data = response.body.sort(
      (a, b) => new Date(b._last_modified) - new Date(a._last_modified)
    )[0];

    data.page_media = {};
    data.page_media["gallery_section"] = data.home_gallery.map((image) => ({
      src: image.src,
      alt: image.name,
    }));
    data.page_media["mission_section"] = {
      src: data.home_mission_image[0].src,
      alt: data.home_mission_image[0].name,
    };
    data.page_media["upcoming_events_section"] = {
      src: data.home_upcoming_events_image[0].src,
      alt: data.home_upcoming_events_image[0].name,
    };

    const closure_dates_array = data.closure_dates.split(";");
    data.closure_dates = closure_dates_array.map((date) => date.trim());

    const upcoming_events_array = data.upcoming_events.split(";");
    data.upcoming_events = upcoming_events_array.map((event) => ({
      date: event.split(":")[0].trim(),
      name: event.split(":")[1].trim(),
    }));

    const extra_fields = [
      "home_gallery",
      "home_mission_image",
      "home_upcoming_events_image",
      "unordered_home_gallery",
      "unordered_home_mission_image",
      "unordered_home_upcoming_events_image",
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
