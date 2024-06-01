export default async function fetchAboutUsData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    // const query = ['commitment_statement', 'youtube_link', 'page_title_and_subtitle', 'sister_clinics', 'ucd_clinics',]
    const query_params = [
      "sister_clinics",
      "ucd_clinics",
      "ucd_clinics.clinic_details",
      "sister_clinics.clinic_details",
      "history_cards",
      "history_cards.card_details",
    ];
    const query = query_params
      .map((param, index) => {
        return `populate[${index}]=${param}`;
      })
      .join("&");

    try {
      // home single type content
      const pageRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/about-us?locale=${locale}&${query}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.CMS_API_KEY}`,
            },
          }
        )
      ).json();
      let pageData = {};
      if (pageRes.data) {
        pageData = pageRes.data.attributes;
      } else {
        throw new Error("Failed to retrieve about-us data from CMS.");
      }

      const history_cards = pageData.history_cards.card_details;
      delete pageData["history_cards"];

      const responseBody = {
        text: pageData,
        history_cards: history_cards,
      };

      res.send({
        status: 200,
        body: responseBody,
        error: null,
      });
    } catch (e) {
      console.log(e.message);
      res.send({
        status: 500,
        body: null,
        error: e.message,
      });
    }
  } else {
    console.log("bad request");
    res.send({
      status: 400,
      body: null,
      error: "Bad request",
    });
  }
}
