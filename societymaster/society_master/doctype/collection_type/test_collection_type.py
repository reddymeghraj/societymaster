# Copyright (c) 2013, Wayzon Technologies and Contributors
# See license.txt

import frappe
import unittest

test_records = frappe.get_test_records('Collection Type')

class TestCollectionType(unittest.TestCase):
	pass
