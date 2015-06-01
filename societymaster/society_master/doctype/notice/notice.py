# Copyright (c) 2013, Wayzon Technologies and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Notice(Document):
	pass
@frappe.whitelist()
def notice_format(d,sub,para):
	html="""
		<html>
			<div id='d1' align=center>
				<body>
					<h4 align=right>Date:%s</h4>
					<h3 align=center>Notice </h3>
					<p align=left><b>Subject:%s</b></p>
					<p align=left>%s</p>
					<p align=left>If you have any query or suggestion please contact on 998787675 or visit our office between 10.00 AM to 5.00 PM</p> 
					<p align=right>Secretary</p>
					<p align=right><b>SatyaPuram Society</b></p>
				</body>
			</div>
		</html>
	""" %(d,sub,para)

	return html