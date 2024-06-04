export default async function fetchCommitteesData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;
    const query_params = [
      "cards.card_details.title",
      "cards.card_details.description",
    ];
    const query = query_params
      .map((param, index) => {
        return `populate[${index}]=${param}`;
      })
      .join("&");

    try {
      const pageRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/committees-page?locale=${locale}&${query}`,
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
        throw new Error("Failed to retrieve committees data from CMS.");
      }

      const cards = pageData.cards.card_details;
      let cards_json = {};
      let committee_names = {};
      cards.map((card, index) => {
        const title = card.title.toLowerCase().replace("'", "").split(" ");
        const imagePath = title.join("_");
        const staticPath = title.join("-");
        cards_json[`${staticPath}`] = {
          name: card.title,
          description: card.description,
          image: `/images/committees/${imagePath}.png`,
          path: `/committees/${staticPath}`,
        };

        committee_names[`item${index + 1}`] = staticPath;
      });
      pageData.cards = cards_json;
      pageData.count_of_committees = cards.length.toString();
      pageData.committee_names = committee_names;

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
