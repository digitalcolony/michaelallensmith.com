function doGet() {
	const doc = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = doc.getSheetByName("Form Responses 1");
	const lastRow = sheet.getLastRow();
	const values = sheet.getRange(2, 1, lastRow - 1, 6).getDisplayValues();
	const result = values.map((r) => ({
		timestamp: r[0],
		where: r[1],
		espresso: r[2],
		rating: r[3],
		price: r[4],
		notes: r[5],
	}));
	return ContentService.createTextOutput(JSON.stringify({ data: result })).setMimeType(
		ContentService.MimeType.JSON
	);
}
