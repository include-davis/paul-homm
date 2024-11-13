export default async function fetchCommitteesData(req, res) {
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
        `${process.env.CMS_BASE_URL}/api/content/committees?_published=true`
      )
    ).json();

    if (!response.ok)
      throw new Error(
        `Failed to retrieve committees data from CMS.\n${response.error.name}: ${response.error.message}`
      );

    const data = {};
    data.committee_links = [];

    response.body.forEach((c) => {
      const committeeName = c.committee_name_en
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      if (
        data.committee_links.includes(committeeName) &&
        new Date(data[committeeName]._last_modified) >
          new Date(c._last_modified)
      )
        return;

      data.committee_links.push(committeeName);
      c.committee_image = {
        src: c.committee_image[0].src,
        alt: c.committee_image[0].name,
      };
      delete c.unordered_committee_image;
      data[committeeName] = c;
    });

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
