var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = 
   {
     userName: 'AppAdmin', // update me
     password: 'Password123', // update me
     server: 'fromfarmtotable.database.windows.net', // update me
     options: 
        {
           database: 'fromfarmtotable' //update me
           , encrypt: true
        }
   }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           readTable("fruits");
       }
   }
 );

function readTable(tableName){ 
    console.log('Reading rows from ' + tableName);
   
    // Read all rows from table
    var request = new Request(
        "SELECT * FROM " + tableName,
            function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
            });
    connection.execSql(request);
}