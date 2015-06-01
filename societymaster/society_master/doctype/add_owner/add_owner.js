cur_frm.cscript.dob=function(doc,cdt,cdn)
{
	var curDate = new Date();
    var curr_year = curDate.getFullYear();
    var curr_month = curDate.getMonth();

    var dt1 = doc.dob;
    var birth_date = new Date(dt1);

    var birth_year = birth_date.getFullYear();
    var birth_month = birth_date.getMonth();
    var calc_year = curr_year - birth_year;
    var calc_month = curr_month - birth_month;
    if (calc_month<0)
    {
    	calc_month=12+calc_month;
    	calc_year=calc_year-1
    }
    var final_result = (calc_year + "." + calc_month)
	//final_result = parseFloat(final_result)
    cur_frm.set_value('age',final_result)
}
cur_frm.cscript.mobile_no=function(doc,cdt,cdn)
{
	var n = doc.mobile_no;
	if((n.length)!=10)
	{
		cur_frm.set_value('mobile_no','')
		frappe.throw("Enter 10 digit no.");
	}

}
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

cur_frm.cscript.vehicles=function(doc,cdt,cdn)
{
	if(doc.vehicles=='Yes')
	{
		unhide_field('four_wheeler','')
		unhide_field('two_wheeler','')
	}
	else
	{
		hide_field('four_wheeler')
		hide_field('two_wheeler')
	}
}
cur_frm.cscript.child_dob=function(doc,cdt,cdn)
{
	var curDate = new Date();
    var curr_year = curDate.getFullYear();
    var curr_month = curDate.getMonth();

    var d=locals[cdt][cdn]
    var dt1 = d.child_dob;
    var birth_date = new Date(dt1);

    var birth_year = birth_date.getFullYear();
    var birth_month = birth_date.getMonth();
    var calc_year = curr_year - birth_year;
    var calc_month = curr_month - birth_month;
    if (calc_month<0)
    {
    	calc_month=12+calc_month;
    	calc_year=calc_year-1
    }
    var final_result = (calc_year + "." + calc_month)
	//final_result = parseFloat(final_result)
    d.child_age=final_result
    refresh_field('family_details')
}

cur_frm.cscript.select_htype=function(doc,cdt,cdn)
{
    var l=doc.select_lane;
    var w=doc.select_wing;
    var h=doc.select_htype;
    frappe.call({
        method:'societymaster.society_master.doctype.add_owner.add_owner.check_house',
        args:{l:l,w:w,h:h},
        callback:function(r)
        {
            if(r.message!=null)
            {
                cur_frm.set_value('select_lane','');
                cur_frm.set_value('select_wing','');
                cur_frm.set_value('select_htype','');
                cur_frm.set_value('lane_name','');
                cur_frm.set_value('wing_name','');
                cur_frm.set_value('house_type','');
            }
        }
    })
}
