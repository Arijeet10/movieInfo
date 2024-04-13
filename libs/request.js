
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };

export const getAPIData=async(req)=>{
    try {
        const res=await fetch(process.env.NEXT_PUBLIC_API_URL+req,options);
        if(res.ok){
            const response=await res.json();
            return response;
        }
    } catch (error) {
        console.log(error)
    }
}