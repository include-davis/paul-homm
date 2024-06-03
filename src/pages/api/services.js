export default async function fetchServicesData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    const query_params = [
      "regular_service",
      "regular_service.title",
      "regular_service.description",
      "services_slides",
      "services_slides.slide.title",
      "services_slides.slide.bullet_points",
      "services_slides.slide.count_of_bullet_points",
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
      for (let i = 0; i < regular_services.length; i++) {
        regular_services_json[`service${i + 1}`] = regular_services[i];
      }
      pageData.regular_service = regular_services_json;

      const services_slides_data = pageData.services_slides.slide;
      const services_slides = services_slides_data.map((slide) => {
        const parsed_bullet_points = slide.bullet_points.split("\n");
        if (
          parsed_bullet_points.length === Number(slide.count_of_bullet_points)
        ) {
          let list = {};
          for (let i = 0; i < parsed_bullet_points.length; i++) {
            list[`item${i + 1}`] = parsed_bullet_points[i];
          }
          return {
            title: slide.title,
            list: list,
            count_of_bullet_points: slide.count_of_bullet_points,
          };
        } else {
          throw new Error(
            "Error: bullet_points in services slidedeck data is entered incorrectly."
          );
        }
      });

      let services_slides_json = {};
      for (let i = 0; i < services_slides.length; i++) {
        services_slides_json[`slide${i + 1}`] = services_slides[i];
      }
      pageData.services_slides = services_slides_json;

      const referrals = pageData.referrals_list_items.split("\n");
      delete pageData.referrals_list_items;
      let referrals_json = {};
      for (let i = 0; i < referrals.length; i++) {
        referrals_json[`item${i + 1}`] = referrals[i];
      }

      const translators = pageData.translators_list_items.split("\n");
      delete pageData.translators_list_items;
      let translators_json = {};
      for (let i = 0; i < translators.length; i++) {
        translators_json[`item${i + 1}`] = translators[i];
      }

      const responseBody = {
        ...pageData,
        regular_services: regular_services_json,
        services_slides: services_slides_json,
        referrals: referrals_json,
        translators: translators_json,
      };

      console.log(responseBody);

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
