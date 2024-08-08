var siteName = document.getElementById('siteName')
var siteUrl = document.getElementById('siteUrl')
var submit = document.getElementById('btnSubmit')
var siteList 

if (localStorage.getItem('site')!==null) {
    siteList = JSON.parse(localStorage.getItem('site'))
    display();
    
}else{
    siteList=[];
}
function addSite() {
var urls ={
    sName :siteName.value,
    sUrl:siteUrl.value
};
var res = urls.sUrl.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/g
  );
  if (res == null) {
    document.getElementById("popUp").style.visibility="visible";
    document.getElementById("layer").style.visibility="visible";
    document.getElementById("layerContainer").style.zIndex="1";
    document.getElementById('close').onclick=function closePop() {
        document.getElementById('popUp').style.visibility="hidden"
        document.getElementById('layer').style.visibility="hidden"  
    }

  } else {
    siteList.push(urls);
    localStorage.setItem("site", JSON.stringify(siteList));
    display();
    reset();
    console.log(siteList);
  }

}

function display() {
    var box = ``;
    for (var i = 0; i < siteList.length; i++) {
        box += `<tr >
        <td  class="pt-2">${i+1}</td>
        <td  class="pt-2">${siteList[i].sName} </td>
        <td  class="pt-2"><button class="btn btn-visit"><i class="fa-solid fa-eye me-2"></i><a href="${siteList[i].sUrl}" class=" text-decoration-none text-white" target="_blank">Visite</a></button></td>
        <td  class="pt-2" onclick="deleteSite(${i})"><button class="btn btn-delete">Delete</button></td>
    </tr>  `
    }
    document.getElementById('trContainer').innerHTML = box;
}

function reset() {
    siteName.value=null
    siteUrl.value=null
    
}
function deleteSite(index) {
    console.log(index)
    siteList.splice(index, 1)
    display()
    localStorage.setItem("site", JSON.stringify(siteList))
    console.log(siteList)

}

    
