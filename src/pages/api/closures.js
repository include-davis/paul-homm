/*
1. include check for if future date
2. send only 5 upcoming dates  (format all future dates, sort increasing, if len>5 dates.splice(5)
*/

export default async function getClosures(req, res){
    if(req.method === 'GET'){    
        try{
            const body = await fetch(`${process.env.CMS_BASE_URL}/closure-dates?populate=*`, 
            {
                method: 'GET',
                headers: {
                    Authorization:
                    `Bearer ${process.env.CMS_ADMIN_KEY}`,
            }})
            const resssss = await body.json();
            if(resssss.data){
                const dates = resssss.data
                res.send({
                    status: 200,
                    data: dates.map((dateDoc)=>{
                        const dateAttributes = dateDoc.attributes;
                        return {
                            date: dateAttributes.closure_date,
                        }
                    })
                })
            } else{
                res.send({
                    status: 500,
                    error: 'Could not retrieve data from CMS'
                })
            }
            console.log(resssss.data);
        }catch(e){
            console.log(e);
            res.send({
                status: 500,
                error: 'Internal server error'
            })
        }
    } else {
        res.send({
            status: 400,
            error: 'Bad request'
        })
    }
}
  