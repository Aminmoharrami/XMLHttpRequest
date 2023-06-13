
function Xhr() {
    const Ajax = new XMLHttpRequest();
    var items = GetReferredIds();
    var link = '/Secretariat/SecretariatDocuments/GetAttachZipFile?ReferredID=' + items.join(',');


    Ajax.onreadystatechange = function () {
        console.log(this);
    }

    Ajax.open('GET', link);
    console.log("OPENED", Ajax.readyState); // readyState will be 1
    AjaxLoading();

    Ajax.onprogress = () => {
        console.log("LOADING", Ajax.readyState); // readyState will be 3
        AjaxLoading();
    };

    Ajax.onload = () => {
        downloadLink = document.createElement('a');
        downloadLink.href = link;
        downloadLink.click();
        downloadLink.remove();
        console.log("DONE", Ajax.readyState); // readyState will be 4
        AjaxHideLoading();
    };
    Ajax.send();
}