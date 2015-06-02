# Copyright (c) 2013, Wayzon Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class AddOwner(Document):
	def validate(self):
		name=self.owner_name
		email=self.email_id
		c=frappe.db.sql("""select email_id from `tabContact` where first_name=%s and email_id=%s""",(name,email))
		if c:
			frappe.throw("Entered Name and Email id already exists!")
		else:
			n=frappe.db.sql("""select max(cast(name as int)) from `tabContact`""")[0][0]
			if n:
				num=int(n)+1
			else:
				num=1
			s=frappe.db.sql("""insert into `tabContact` set name=%s,first_name=%s, email_id=%s""",(num,name,email))

@frappe.whitelist()
def check_house(l,w,h):
	q=frappe.db.sql("""select select_lane,select_wing,select_htype from `tabAdd Owner` where select_lane=%s and select_wing=%s and select_htype=%s""",(l,w,h))
	if q:
		frappe.msgprint("Selected house is already allocated")
		return(q)
	else:
		q1=frappe.db.sql("""select lane_no,wing_no,house_type from `tabAdd Tenent` where lane_no=%s and wing_no=%s and house_type=%s""",(l,w,h))
		if q1:
			frappe.msgprint("Selected house is already allocated")
			return (q1)
