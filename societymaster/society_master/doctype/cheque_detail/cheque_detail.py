# Copyright (c) 2013, Wayzon Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ChequeDetail(Document):
	def on_submit(self):
		d=self.date
		bk_id=self.bank_id
		chq_no=self.cheque_no
		chq_id=self.cheque_id
		acc_no=self.account_no
		tr=self.transaction
		bal=self.balance
		if(self.cheque_status=='Clear'):
			q0=frappe.db.sql("""select max(cast(name as int)) from `tabBank Detail`""")[0][0]
			if q0:
				name=int(q0)+1
			else:
				name=1
			q=frappe.db.sql("""insert into `tabBank Detail` 
			set name=%s,date=%s,bank_id=%s,account_no=%s,cheque_id=%s,cheque_no=%s,transaction=%s,amount=%s""",(name,d,bk_id,acc_no,chq_id,chq_no,tr,bal))
