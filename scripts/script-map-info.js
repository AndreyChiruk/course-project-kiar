
async function parseXMLFile(url) {
    try {
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
       
        const xmlText = await response.text();
        
        
        const parser = new DOMParser();
        
        const xmlDocument = parser.parseFromString(xmlText, "application/xml");

        
        if (xmlDocument.getElementsByTagName("parsererror").length > 0) {
            throw new Error("Error parsing XML");
        }
        let p = document.querySelectorAll('.info');
        
        const phoneNumber = xmlDocument.querySelector("phoneNumber").textContent;
        const email = xmlDocument.querySelector("email").textContent;
        const address = xmlDocument.querySelector("address").textContent;
        p[0].textContent = phoneNumber;
        p[1].textContent = email;
        p[2].textContent = address;

        

    } catch (error) {
        console.error("Error parsing XML file:", error);
    }
}


parseXMLFile("xml/text.xml");
