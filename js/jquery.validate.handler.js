$(function(){
    $('#inform').validate({
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
            },
			message: {
				required: true,
			},
        },
        messages: {
            name: {
                required: 'お名前を入力してください。',
                minlength: 'お名前は2文字以上で入力してください。'
            },
            email:{
                required:"メールアドレスを入力してください。"
            },
            message:{
                repuired:'メッセージを入力してください'
            },
        },
	})
})

$(function(){
    $('#reserve').validate({
        messages: {
            name: {
                required: 'お名前を入力してください。',
                minlength: 'お名前は2文字以上で入力してください。'
            },
            email:{
                required:"メールアドレスを入力してください。"
            },

        },
        rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
            },

        },
    })


    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    var mm30 = ("0"+(today.getMonth()+3)).slice(-2);
    var element = document.getElementById("reserve1");
    element.min=yyyy+'-'+mm+'-'+dd;
    element.max=yyyy+'-'+mm30+'-'+dd;


    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    var mm30 = ("0"+(today.getMonth()+3)).slice(-2);
    var element = document.getElementById("reserve2");
    element.min=yyyy+'-'+mm+'-'+dd;
    element.max=yyyy+'-'+mm30+'-'+dd;

    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var mm30 = ("0"+(today.getMonth()+3)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    var element = document.getElementById("reserve3");
    element.min=yyyy+'-'+mm+'-'+dd;
    element.max=yyyy+'-'+mm30+'-'+dd;

})
