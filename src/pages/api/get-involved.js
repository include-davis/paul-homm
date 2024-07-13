export default async function fetchGetInvolvedData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    const query_params = [
      "involvement_opportunities.opportunity_details.title_short",
      "involvement_opportunities.opportunity_details.title_long",
      "involvement_opportunities.opportunity_details.content_1",
      "involvement_opportunities.opportunity_details.content_2",
    ];
    const query = query_params
      .map((param, index) => {
        return `populate[${index}]=${param}`;
      })
      .join("&");

    try {
      const pageRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/get-involved?locale=${locale}&${query}`,
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
          `Failed to retrieve get-involved  data from CMS.\n${pageRes.error.name}: ${pageRes.error.message}`
        );
      }

      const cards = pageData.involvement_opportunities.opportunity_details;
      delete pageData.involvement_opportunities;
      cards.map((card, index) => {
        pageData[`card${index + 1}`] = card;
      });

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
