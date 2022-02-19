function getValuesInsert()
{
    iID=document.getElementById('insertID').value;
    iName=document.getElementById('insertName').value;
    iClass=document.getElementById('insertClass').value;
    iLocation=document.getElementById('insertLocation').value;
    alert(iID+iName+iClass+iLocation)
}

function getValuesUpdate()
{
    uID=document.getElementById('updateID').value;
    uName=document.getElementById('updateName').value;
    uClass=document.getElementById('updateClass').value;
    uLocation=document.getElementById('updateLocation').value;
    alert(uID+uName+uClass+uLocation)
}

function deleteValues()
{
    dID=document.getElementById('deleteID').value;
    alert(dID);
}

