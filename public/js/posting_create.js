console.log('hi');

$("#postingCreate").submit((e) => {
	e.preventDefault();

	var form = $(this);
	var url = form.attr('action');

	console.log(form.serialize());

	$.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: (data) => {
            alert(data); // show response from the php script.
        }
    });
})
