

//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject='',initBody='';
 
    //按下傳送按鈕後執行
function submitHandler(){
    var to = "a0979511006@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
//把user填的資料都塞到 mail body 中
    var body = ""+messageText.value+'%0A%0A%0A';//%0A是換行 換了三行
//傳送的主要程式碼
    mailTo.href="mailto:"+to+"?subject="+"PYAS反饋"+"&body="+body;
    mailTo.click();
}
//在body onload
function init(){
    toText.value=initTo;
    bodyText.value=initBody;
}
