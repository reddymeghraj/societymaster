//Email_Id Verification
cur_frm.cscript.email_id=function(doc,cdt,cdn)
{
	var str=doc.email_id;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str))
  	{
  		return (true)
  	}
  	else
  	{
  		cur_frm.set_value('email_id','') 
    	frappe.throw("You have entered an invalid email address!")
    	return (false)
    }
}
cur_frm.cscript.website=function(doc,cdt,cdn)
{
  var w=doc.website;
  checkURL(w);

  function checkURL(value) 
  {
    var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    if (urlregex.test(value)) 
    {
        return (true);
    }
    else
    {
    alert("Enter proper URL")
    return (false);
  }
  }

}