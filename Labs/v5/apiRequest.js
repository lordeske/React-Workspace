const apiReq = async ( url = "" , optionObj = null, errorMess = null ) => {


    try 
    {

        const response = await fetch (url , optionObj);

        if (!response.ok)
        {

            throw Error("Molimo vas refresujte stranicu");



        }



    }
    catch (e)
    {

        errorMess= e.errorMess;

    }
    finally 
    {
        return errorMess;

    }




}

export default apiReq