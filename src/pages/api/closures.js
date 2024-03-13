export default async function getClosures(req, res){
    if(req.method === 'GET'){    
        try{
            // future dates only
            const today = new Date().toISOString().split('T')[0];
            const body = await fetch(`${process.env.CMS_BASE_URL}/closure-dates?populate=*&publicationState=live&filters[$and][0][closure_date][$gte]=${today}`, 
            {
                method: 'GET',
                headers: {
                    Authorization:
                    `Bearer ${process.env.CMS_ADMIN_KEY}`,
            }})

            const resssss = await body.json();

            if(resssss.data){
                const dates = resssss.data;
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
  