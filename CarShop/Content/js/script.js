function SetImg(selected_url)
{
    var item = document.getElementById('preview');
    item.src = selected_url;
}

$(document).ready(function(){
    $('#header').fadeTo(100, 0.3, function(){
        $('html, body').animate(
            {scrollTop:$('#content').offset().top}, 2000);
       
    });
});

$(document).on('submit', 'form', function(){
    var UserName=$('input[name=Name]').val();
    var UserTel=$('input[name=Tel]').val();
    var Car=$('select').val();

    
    
    if(UserName.length>0)
        {
            var regular = /8-[0-9]{3}-[0-9]{3}-[0-9]{4}/;
            if(regular.test(UserTel)==true)
                {
                    alert("Perfect");
                }
            else
                {
                    alert("Номер введен не корректно");
                }
        }
    else
        {
            alert("Имя введено не корректно");
        }
    
    
    
});

