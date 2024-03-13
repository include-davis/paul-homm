/*
1. include check for if future date
2. send only 5 upcoming dates  (format all future dates, sort increasing, if len>5 dates.splice(5)
3. check for locale received in post request
4. change hmn to ha
*/

export default async function getEvents(req, res){
    if(req.method==='POST' && req.body.locale){
        const locale = req.body.locale === 'hmn'? 'ha': req.body.locale;
        try{
            const body = await fetch(`${process.env.CMS_BASE_URL}/upcoming-events?locale=${locale}&populate=*`, 
            {
                method: 'GET',
                headers: {
                    Authorization:
                    `Bearer ${process.env.CMS_ADMIN_KEY}`,
            }})
            const resssss = await body.json();
            console.log(resssss.data);
            if(resssss.data){
                const events = resssss.data
                res.send({
                    status: 200,
                    data: events.map((eventDoc)=>{
                        const eventAttributes = eventDoc.attributes;
                        return {
                            event_date: eventAttributes.event_date,
                            event_title: eventAttributes.event_title,
                        }
                    })
                })
            } else{
                res.send({
                    status: 500,
                    error: 'Could not retrieve data from CMS'
                })
            }
        }catch(e){
            console.log(e);
            res.send({
                status: 500,
                error: 'Internal server error'
            })
        }
    } else{
        res.send({
            status: 400,
            error: 'Bad request'
        })
    }
}
  