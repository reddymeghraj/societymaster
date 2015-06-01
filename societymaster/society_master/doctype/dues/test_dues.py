# Copyright (c) 2013, Wayzon Technologies and Contributors
# See license.txt

import frappe
import unittest

test_records = frappe.get_test_records('Dues')

class TestDues(unittest.TestCase):
	pass
