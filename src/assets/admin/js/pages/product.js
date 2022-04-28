$(document).ready(()=>{
    productEvent()
})
function productEvent(){
    $(document).on("click",".product_delete",function (){
        let element=$(this)
        let closest=element.closest("tr")
        let id=closest.attr("data-id")
        $.ajax({
            method: "post",
            url: "service/user",
            data: { id:id},
            success: function(response) {
                console.log('AJAX',response);
                if(response.status){
                    closest.remove();
                }else {
                    alert('hata: '+ JSON.stringify(response))
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }

        })
        console.log("sadasd")



    })


}