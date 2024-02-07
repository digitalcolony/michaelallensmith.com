function doGet() {
	const doc = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = doc.getSheetByName("Form Responses 1");
	const lastRow = sheet.getLastRow();
	const values = sheet.getRange(2, 1, lastRow - 1, 6).getDisplayValues();
	const result = values.map((r) => ({
		timestamp: r[0],
		show_name: r[1],
		review: r[2],
		finished: r[3],
		show_type: r[4],
		comments: r[5],
	}));
	return ContentService.createTextOutput(JSON.stringify({ data: result })).setMimeType(
		ContentService.MimeType.JSON
	);
}
