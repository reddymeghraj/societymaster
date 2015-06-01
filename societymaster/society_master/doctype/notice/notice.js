cur_frm.cscript.notice_paragraph=function(doc,cdt,cdn)
{
	var d=doc.date
	var sub=doc.subject
	var para=doc.notice_paragraph
	frappe.call({
		method:'societymaster.society_master.doctype.notice.notice.notice_format',
		args:{d:d,sub:sub,para:para},
		callback:function(r)
		{
			set_field_options('html',r.message)
		}
	})
}

cur_frm.cscript.print_notice=function(doc,cdt,cdn)
{
	var d=doc.date
	var sub=doc.subject
	var para=doc.notice_paragraph
	frappe.call({
		method:'societymaster.society_master.doctype.notice.notice.notice_format',
		args:{d:d,sub:sub,para:para},
		callback:function(r)
		{
			set_field_options('html',r.message)
		}
	})
	//--------------------------
	//PRINT NOTICE IN NEW WINDOW
	//--------------------------
	var divToPrint1=document.getElementById('d1');
	newWin= window.open("");
  	newWin.document.write(divToPrint1.outerHTML);
 	newWin.print();
  	newWin.close();

}