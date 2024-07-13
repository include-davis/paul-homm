export default async function fetchAboutUsData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    const query_params = [
      "page_title_and_subtitle",
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
        throw new Error(
          `Failed to retrieve about-us data from CMS.\n${pageRes.error.name}: ${pageRes.error.message}`
        );
      }

      const history_cards = pageData.history_cards.card_details;
      const history_cards_json = {};
      history_cards.map((card) => {
        history_cards_json[`card${card.card_number}`] = {
          title: card.title,
          description: card.description,
          image_description: card.image_description,
        };
      });
      pageData.history_cards = {
        card_count: history_cards.length.toString(),
        ...history_cards_json,
      };

      let clinic_category_title = pageData.sister_clinics.clinic_category_title;
      const sister_clinics = pageData.sister_clinics.clinic_details;
      const sister_clinics_json = {};
      sister_clinics.map((clinic, index) => {
        sister_clinics_json[`clinic${index + 1}`] = {
          name: clinic.name,
          website_link: clinic.website_link,
        };
      });
      pageData.sister_clinics = {
        clinic_category_title: clinic_category_title,
        clinic_count: sister_clinics.length.toString(),
        ...sister_clinics_json,
      };

      clinic_category_title = pageData.ucd_clinics.clinic_category_title;
      const ucd_clinics = pageData.ucd_clinics.clinic_details;
      const ucd_clinics_json = {};
      ucd_clinics.map((clinic, index) => {
        ucd_clinics_json[`clinic${index + 1}`] = {
          name: clinic.name,
          website_link: clinic.website_link,
        };
      });
      pageData.ucd_clinics = {
        clinic_category_title: clinic_category_title,
        clinic_count: ucd_clinics.length.toString(),
        ...ucd_clinics_json,
      };

      res.send({
        status: 200,
        body: pageData,
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
