document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const zip = new JSZip();

    
    const formData = new FormData(event.target);
    let dataString = "";
    
    
    for (let [key, value] of formData.entries()) {
        dataString += `${key}: ${value}\n`;
    }
    
    
    zip.file("formData.txt", dataString);
    
    
    const resumeFile = formData.get("resume");
    const additionalFiles = formData.get("additionalFiles");

    if (resumeFile && resumeFile.size > 0) {
        zip.file(resumeFile.name, resumeFile);
    }

    if (additionalFiles && additionalFiles.size > 0) {
        zip.file(additionalFiles.name, additionalFiles);
    }

    
    zip.generateAsync({ type: "blob" })
        .then(function(zipBlob) {
            
            const url = URL.createObjectURL(zipBlob);

            
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'formData.zip';

          
            document.body.appendChild(downloadLink);
            downloadLink.click();

           
            document.body.removeChild(downloadLink);

            
            URL.revokeObjectURL(url);
        });
});