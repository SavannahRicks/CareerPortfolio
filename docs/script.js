function lastModified()
{
    var modiDate=new Date(document.lastModified);
    var showAs=(modiDate.getMonth()+1)+ "/" +modiDate.getDate()+ "/" +modiDate.getFullYear();
    return showAs
}





document.write ("Last updated on ")
document.write (lastModified() );

document.write ("");