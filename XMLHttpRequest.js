


//Management Request by GET
function Xhr() {
    const Ajax = new XMLHttpRequest();
    var link = '/Secretariat/SecretariatDocuments/GetAttachZipFile?ReferredID=';

//Check readyState in Console (XMLHttpRequest)
    Ajax.onreadystatechange = function () {
        console.log(this);
    }

    //Open 
    Ajax.open('GET', link);
    console.log("OPENED", Ajax.readyState); // readyState will be 1
    AjaxLoading();


    //Handale ReadyState Loading
    Ajax.onprogress = () => {
        console.log("LOADING", Ajax.readyState); // readyState will be 3
        AjaxLoading();
    };


     //Handale ReadyState Done
    Ajax.onload = () => {
        downloadLink = document.createElement('a');
        downloadLink.href = link;
        downloadLink.click();
        downloadLink.remove();
        console.log("DONE", Ajax.readyState); // readyState will be 4
        AjaxHideLoading();
    };

    //Send Request
    Ajax.send();
}