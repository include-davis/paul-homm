export default async function getEvents(req, res){
    if(req.method==='POST' && req.body.locale){
        const locale = req.body.locale === 'hmn'? 'ha': req.body.locale;
        const today = new Date().toISOString().split('T')[0];        // future events only
        try{
            const body = await fetch(`${process.env.CMS_BASE_URL}/upcoming-events?locale=${locale}&populate=*&publicationState=live&filters[$and][0][event_date][$gte]=${today}`, 
            {
                method: 'GET',
                headers: {
                    Authorization:
                    `Bearer ${process.env.CMS_ADMIN_KEY}`,
            }})
            const resssss = await body.json();
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
  