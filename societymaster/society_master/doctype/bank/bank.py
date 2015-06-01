# Copyright (c) 2013, Wayzon Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Bank(Document):
	def validate(self):
		name=self.name
		bk_name=self.bank_name
		acc_no=self.account_no
		bal=self.balance
		q0=frappe.db.sql("""select name,bank_name,account_no,balance from `tabBank` where bank_name=%s and account_no=%s""",(bk_name,acc_no))
		if q0:
			frappe.throw("Entered Bank,Account No already exists")
		else:
			q1=frappe.db.sql("""select max(cast(name as int)) from `tabBank Detail`""")[0][0]
			if q1:
				name1=int(q1)+1
			else:
				name1=1;
			q2=frappe.db.sql("""insert into `tabBank Detail` set name=%s,bank_id=%s,bank_name=%s,account_no=%s,amount=%s,transaction=1""",(name1,name,bk_name,acc_no,bal))
