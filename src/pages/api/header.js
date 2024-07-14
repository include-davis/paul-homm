export default async function fetchHeaderData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;

    // try {
      const response = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/header?locale=${locale}&populate=*`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.CMS_API_KEY}`,
            },
          }
        )
      ).json();
      let data = {};
      if (response.data) {
        data = response.data.attributes;
      } else {
        console.log(response);
        throw new Error(
          `Failed to retrieve header data from CMS.\n${response.error.name}: ${response.error.message}`
        );
      }

      res.send({
        status: 200,
        body: data,
        error: null,
      });
    // } catch (e) {
    //   console.log(e.message);
    //   res.send({
    //     status: 500,
    //     body: null,
    //     error: e.message,
    //   });
    // }
  } else {
    console.log("bad request");
    res.send({
      status: 400,
      body: null,
      error: "Bad request",
    });
  }
}
