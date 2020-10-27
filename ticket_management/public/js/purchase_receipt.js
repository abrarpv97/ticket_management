frappe.ui.form.on('Purchase Receipt', {
    refresh: function(frm) {
        if (!frm.doc.__islocal && frm.doc.docstatus<2) {
       frm.add_custom_button(__('Ticket'),
		 cur_frm.cscript['create_tickets'], __("Make"));
    } 
}
});
cur_frm.cscript.create_tickets = function(doc) {
   frappe.model.open_mapped_doc({
			method: "ticket_management.ticket_management.doctype.ticket.ticket.purchase_receipt_make_tickets",
			frm: cur_frm
		}) 
};