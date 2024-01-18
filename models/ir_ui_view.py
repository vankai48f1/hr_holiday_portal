from odoo import models, fields, api

class IrUiView(models.Model):
    _inherit = 'ir.ui.view'
    # is_page_employee_portal = fields.Boolean(string="Page of employee portal")