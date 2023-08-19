function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyAsT6be_Hg0XqKqJOxykey7KCb_QL-ef60',
        clientId: '113314560224882986945',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(function () {
        document.getElementById('emailForm').addEventListener('submit', submitForm);
    });
}


function submitForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    
    // Append the email to the Google Sheet
    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1qwCm391wo2aJAex3PijbJ-47_VMo4QDEysw8CqfuzGA',
        range: 'Sheet1', // Adjust sheet name and range as needed
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [[email]]
        }
    }).then(function(response) {
        console.log('Email added successfully');
    }, function(response) {
        console.error('Error adding email:', response.result.error.message);
    });
}

// Load the Google Sheets API library
gapi.load('client', initClient);
