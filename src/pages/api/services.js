export default async function fetchServicesData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    const query_params = [
      "regular_service",
      "regular_service.title",
      "regular_service.description",
      "services_slides",
      "services_slides.slide_count",
      "services_slides.slides.title",
      "services_slides.slides.bullet_points",
      "services_slides.slides.count_of_bullet_points",
    ];
    const query = query_params
      .map((param, index) => {
        return `populate[${index}]=${param}`;
      })
      .join("&");

    try {
      const pageRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/services-page?locale=${locale}&${query}`,
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
        throw new Error("Failed to retrieve services data from CMS.");
      }

      const regular_services = pageData.regular_service;
      let regular_services_json = {};
      regular_services.map((item, index) => {
        regular_services_json[`service${index + 1}`] = {
          title: item.title,
          description: item.description,
        };
      });
      pageData.regular_service = regular_services_json;

      const services_slides = pageData.services_slides.slides;
      let services_slides_json = {
        slide_count: pageData.services_slides.slide_count,
      };

      services_slides.map((slide, i) => {
        const parsed_bullet_points = slide.bullet_points.split("\n");
        let list = {};
        parsed_bullet_points.map((pt, index) => {
          list[`item${index + 1}`] = pt;
        });

        services_slides_json[`slide${i + 1}`] = {
          title: slide.title,
          list: list,
          count_of_bullet_points: parsed_bullet_points.length.toString(),
        };
      });
      pageData.services_slides = services_slides_json;

      const referrals = pageData.referrals_list_items.split("\n");
      delete pageData.referrals_list_items;
      let referrals_json = {};
      referrals.map((pt, index) => {
        referrals_json[`item${index + 1}`] = pt;
      });
      pageData.referrals = referrals_json;

      const translators = pageData.translators_list_items.split("\n");
      delete pageData.translators_list_items;
      let translators_json = {};
      translators.map((pt, index) => {
        translators_json[`item${index + 1}`] = pt;
      });
      pageData.translators = translators_json;

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
