export default async function fetchHomepageData(req, res) {
  if (req.method === "POST" && req.body.locale) {
    const locale = req.body.locale === "hmn" ? "ha" : req.body.locale;

    try {
      // home single type content
      const homepageRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/homepage?locale=${locale}&populate=*`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.CMS_API_KEY}`,
            },
          }
        )
      ).json();
      let homepageData = {};
      if (homepageRes.data) {
        homepageData = homepageRes.data.attributes;
      } else {
        throw new Error("Failed to retrieve homepage data from CMS.");
      }

      // closure dates
      const today = new Date().toISOString().split("T")[0];
      const closureDatesRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/closure-dates?populate=*&publicationState=live&filters[$and][0][closure_date][$gte]=${today}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.CMS_API_KEY}`,
            },
          }
        )
      ).json();
      let closureDates = [];
      if (closureDatesRes.data) {
        const dates = closureDatesRes.data;
        closureDates = dates.map((dateDoc) => {
          const dateString = dateDoc.attributes.closure_date;
          const now = new Date();
          const date =
            now.getTimezoneOffset() > 420
              ? `${dateString}T00:00:00-08:00`
              : `${dateString}T00:00:00-07:00`;
          return date;
        });
      } else {
        throw new Error("Failed to retrieve closure_dates data from CMS.");
      }

      // upcoming events
      const eventsRes = await (
        await fetch(
          `${process.env.CMS_BASE_URL}/api/upcoming-events?locale=${locale}&populate=*&publicationState=live&filters[$and][0][event_date][$gte]=${today}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.CMS_API_KEY}`,
            },
          }
        )
      ).json();
      let upcomingEvents = [];
      if (eventsRes.data) {
        const events = eventsRes.data;
        upcomingEvents = events.map((eventDoc) => {
          const { event_date, event_title } = eventDoc.attributes;
          const now = new Date();
          const dateString =
            now.getTimezoneOffset() > 420
              ? `${event_date}T00:00:00-08:00`
              : `${event_date}T00:00:00-07:00`;
          return {
            date: dateString,
            event: event_title,
          };
        });
      } else {
        throw new Error("Failed to retrieve upcoming_events data from CMS.");
      }

      const responseBody = {
        text: homepageData,
        closure_dates: closureDates,
        upcoming_events: upcomingEvents,
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
