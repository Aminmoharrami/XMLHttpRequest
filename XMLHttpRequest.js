    function XHR() {
        const Ajax = new XMLHttpRequest();
        var items = GetReferredIds();
        Ajax.open('GET', '/Secretariat/SecretariatDocuments/GetAttachZipFile?ReferredID=' + items.join(','));
        Ajax.onreadystatechange=(function () {
            console.log(this)
        })
        Ajax.send();
    }