$("#fb").click(() => {
    $.ajax({ 
        url: '/feecbok',
        type: 'POST',
        cache: false, 
        // data: { field1: 1, field2: 2 }, 
        success: function(data){
           alert('Success!')
        }
        , error: function(jqXHR, textStatus, err){
            alert("this isn't supposed to error out")
        }
    });
});