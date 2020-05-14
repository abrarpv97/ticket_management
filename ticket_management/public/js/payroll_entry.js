frappe.ui.form.on('Payroll Entry', {
    refresh: function(frm) {
       frm.add_custom_button(__('Ticket'),
		 cur_frm.cscript['create_tickets'], __("Make"));
    } 
});
cur_frm.cscript.create_tickets = function(doc) {
   frappe.model.open_mapped_doc({
			method: "ticket_management.ticket_management.doctype.ticket.ticket.payroll_entry_make_tickets",
			frm: cur_frm
		}) 
};