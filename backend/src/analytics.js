const sqlite3 = require('sqlite3').verbose();
const { createObjectCsvWriter } = require('csv-writer');

const db = new sqlite3.Database('analytics.db');
db.run(`CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY, type TEXT, data TEXT, timestamp TEXT
)`);

function logEvent(type, data) {
  db.run(`INSERT INTO events (type, data, timestamp) VALUES (?, ?, ?)`, [type, JSON.stringify(data), new Date().toISOString()]);
}

async function exportCsv() {
  const csvWriter = createObjectCsvWriter({
    path: 'analytics.csv',
    header: [
      {id:'id',title:'ID'},
      {id:'type',title:'Type'},
      {id:'data',title:'Data'},
      {id:'timestamp',title:'Timestamp'}
    ]
  });
  db.all('SELECT * FROM events', [], (_, rows) => csvWriter.writeRecords(rows));
}

module.exports = { logEvent, exportCsv };
