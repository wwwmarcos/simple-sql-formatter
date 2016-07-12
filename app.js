 $(document).ready(function() {

   $('#format').click(function() {
     var query = ($('#query').val()).replace(/"/g, '').replace(/[+]/g, ''),
       url = 'http://sqlformat.org/api/v1/format',
       method = 'POST';
     $.ajax({
       url: url,
       type: method,
       dataType: 'json',
       crossDomain: true,
       data: {
         sql: query,
         reindent: 1,
         keyword_case: 'upper'
       },
     }).done(function(response) {
       $('#query').val(response.result);
     });
   });

   $('#toString').click(function() {
     var query = ($('#query').val()).replace(/"/g, '').replace(/[+]/g, '').split('\n'),
       newQuery = '';

     query.map(function(line) {
       newQuery += '+ " ' + line + '" \n';
     });

     $('#query').val(newQuery);
   });

 });