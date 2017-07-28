$('input[type="range"]').on('change', function () {
 var currentValue = $(this).val();
 var currentName = $(this).attr('id');
 $('#'+ currentName + '_value').html(currentValue);
});
