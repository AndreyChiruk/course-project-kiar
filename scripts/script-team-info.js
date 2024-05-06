
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

       
        const people = xmlDocument.getElementsByTagName("person");
        
        let fio = document.querySelectorAll('.section_fio');
        let spec = document.querySelectorAll('.section_spec');
        let text = document.querySelectorAll('.section_text');
        
        let x = 0;
        for (let person of people) {
            const name = person.getElementsByTagName("name")[0].textContent;
            const position = person.getElementsByTagName("position")[0].textContent;
            const quote = person.getElementsByTagName("quote")[0].textContent;
            fio[x].textContent = name;
            spec[x].textContent = position;
            text[x].textContent = quote;
            x++;
        }

    } catch (error) {
        console.error("Error parsing XML file:", error);
    }
}


parseXMLFile("xml/team.xml");
