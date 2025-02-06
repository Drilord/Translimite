let a,b,c,d,e,f,g;

document.addEventListener('DOMContentLoaded', () => {
const discSel=document.getElementById('discLv');
discSel.addEventListener('change',()=>{
    if(discSel.value>'3'){
        genpass();}

});
});









////functions
async function extractText() {
    let span,span2,span3,span4,span5,span6,span7,span8,span9,span10,span11,span12,span13;
    const fileInput = document.getElementById('pdfFile');
    const file = fileInput.files[0];

    if (file) {
      try {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = async (event) => {
          const arrayBuffer = event.target.result;

          const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
          const numPages = pdf.numPages;

          let extractedText = '';
          
          for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join('');
            extractedText += pageText;
          }
          const div=document.getElementById('tgtDiv');
           /* const textArea = document.createElement('textarea'); // Use 'textArea' for clarity
            textArea.id = 'textA';
            textArea.innerText = extractedText;
            div.appendChild(textArea); */
            const humTit=document.createElement('h2');
            humTit.innerText="Resumen del Humidificador";
            const optTit=document.createElement('h2');
            optTit.innerText="Opciones";
           
              const humCapRegex = /Actual Humidifier Capacity:\s*(\d+(\.\d+)?)\s*lb\/hr/;
              const humCapMatch = extractedText.match(humCapRegex);
              const supVoltRegex = /Supply Voltage:\s*(\d+\/\d+)/;
              console.log(supVoltRegex);
              const supVoltMatch = extractedText.match(supVoltRegex);
              console.log(supVoltMatch);
              const ampDrawRegex = /Amp Draw:\s*(\d+(\.\d+)?)\s*each/;
              const ampDrawMatch = extractedText.match(ampDrawRegex);
            const drainTemperingRegex = /Drain Tempering:\s*(None \(Standard\))/;
            const drainTemperingMatch = extractedText.match(drainTemperingRegex);
            let drainTempering = null;

            if (drainTemperingMatch) {
                drainTempering = drainTemperingMatch[1];
                console.log(`Drain Tempering: ${drainTempering}`);
                span10 = document.createElement('span');
                span10.innerText = `Templado de Drenaje: ${drainTempering}`;
            } else {
                console.log("Drain Tempering not found.");
            }

            const enclosureTypeRegex = /Enclosure Type:\s*(Indoor Enclosure \(Standard\))/;
            const enclosureTypeMatch = extractedText.match(enclosureTypeRegex);
            let enclosureType = null;

            if (enclosureTypeMatch) {
                enclosureType = enclosureTypeMatch[1];
                console.log(`Enclosure Type: ${enclosureType}`);
                span11 = document.createElement('span');
                span11.innerText = `Tipo de Recinto: ${enclosureType}`;
            } else {
                console.log("Enclosure Type not found.");
            }

            const outletTypeRegex = /Outlet Type:\s*(\d+\) \d+" Outlets)/;
            console.log('outletTypeRegex',outletTypeRegex);
            const outletTypeMatch = extractedText.match(outletTypeRegex);
            console.log('outletTypeMatch',outletTypeMatch);
            let outletType = null;
            span12 = document.createElement('span');
            if (outletTypeMatch) {
                outletType = outletTypeMatch[1];
                console.log(`Outlet Type: ${outletType}`);
                
                span12.innerText = `Tipo de Conector: ${outletType}`;
            } else {
                console.log("Outlet Type not found.");
                span12.innerText = `Tipo de Conector: ${outletType}`;
            }

            const waterTypeRegex = /Water Type:\s*(Tap Water)/;
            const waterTypeMatch = extractedText.match(waterTypeRegex);
            let waterType = null;

            if (waterTypeMatch) {
                waterType = waterTypeMatch[1];
                console.log(`Water Type: ${waterType}`);
                span13 = document.createElement('span');
                span13.innerText = `Tipo de Agua: ${waterType}`;
            } else {
                console.log("Water Type not found.");
            }
              let ampDraw = null;

              if (ampDrawMatch) {
                ampDraw = parseFloat(ampDrawMatch[1]);
                console.log(`Amp Draw: ${ampDraw} each`);
                span6 = document.createElement('span');
                span6.innerText = `Consumo de Amperios: ${ampDraw} each`;
                
              } else {
                console.log("Amp Draw not found.");
              }

              const breakerSizeRegex = /Breaker Size Required:\s*(\d+)\s*each/;
              const breakerSizeMatch = extractedText.match(breakerSizeRegex);
              let breakerSize = null;

              if (breakerSizeMatch) {
                breakerSize = parseInt(breakerSizeMatch[1]);
                console.log(`Breaker Size Required: ${breakerSize} each`);
                span7 = document.createElement('span');
                span7.innerText = `Tamaño del Interruptor Requerido: ${breakerSize} each`;
                
              } else {
                console.log("Breaker Size Required not found.");
              }

              const wireSizeRegex = /Wire Size Required:\s*(\d+)\s*each/;
              const wireSizeMatch = extractedText.match(wireSizeRegex);
              let wireSize = null;

              if (wireSizeMatch) {
                wireSize = parseInt(wireSizeMatch[1]);
                console.log(`Wire Size Required: ${wireSize} each`);
                span8 = document.createElement('span');
                span8.innerText = `Tamaño del Cable Requerido: ${wireSize} each`;
                
              } else {
                console.log("Wire Size Required not found.");
              }

              const controlSignalRegex = /Control Signal:\s*(0-10VDC or 4-20 mA)/;
              const controlSignalMatch = extractedText.match(controlSignalRegex);
              let controlSignal = null;

              if (controlSignalMatch) {
                controlSignal = controlSignalMatch[1];
                console.log(`Control Signal: ${controlSignal}`);
                span9 = document.createElement('span');
                span9.innerText = `Señal de Control: ${controlSignal}`;

              } else {
                console.log("Control Signal not found.");
              }
              let supVolt = null;

              if (supVoltMatch) {
                supVolt = supVoltMatch[1];
                console.log(`Supply Voltage: ${supVolt}`);
                span5 = document.createElement('span');
                span5.innerText = `Voltaje de Suministro: ${supVolt}`;
                
              } else {
                console.log("Supply Voltage not found.");
              }
              let humCap = null;

              if (humCapMatch) {
                humCap = parseFloat(humCapMatch[1]);
                console.log(`Actual Humidifier Capacity: ${humCap} lb/hr`);
                span4 = document.createElement('span');
                span4.innerText = `Capacidad Actual del Humidificador: ${humCap} lb/hr`;
               
              } else {
                console.log("Actual Humidifier Capacity not found.");
              }
          const regex = /Model Number:\s*(\w+)\s*\(Qty\s*(\d+)\)/;
        const humidLoadRegex = /Humidification Load:\s*(\d+(\.\d+)?)\s*lb\/hr/;
        const humidLoadMatch = extractedText.match(humidLoadRegex);

        let humidLoad = null;

        if (humidLoadMatch) {
            humidLoad = parseFloat(humidLoadMatch[1]);
            console.log(`Humidification Load: ${humidLoad} lb/hr`);
            span3 = document.createElement('span');
            span3.innerText = `Carga de Humidificación: ${humidLoad} lb/hr`;
            
        } else {
            console.log("Humidification Load not found.");
        }
          const match = extractedText.match(regex);
          
          let model = null;
          let qty = null;

          if (match) {
            model = match[1];
            qty = parseInt(match[2]); 
            console.log(`Model: ${model}`);
            
            console.log(`Quantity: ${qty}`); 
        } else {
            console.log("Model and Quantity not found.");
          }
            span = document.createElement('span');
            span.innerText = `Modelo: ${model}`; 
            span2 = document.createElement('span');
             span2.innerText =`Cantidad: ${qty}` 
            div.appendChild(humTit); 
            div.appendChild(span);
            div.appendChild(span2);
            div.appendChild(span3);
            div.appendChild(span4);
            div.appendChild(span5);
            div.appendChild(span6);
            div.appendChild(span7);
            div.appendChild(span8);
            div.appendChild(span9);
            div.appendChild(optTit);
            div.appendChild(span10);
            div.appendChild(span11);
            div.appendChild(span12);
            div.appendChild(span13);
            const btn = document.createElement('button');
            btn.innerText = "Generar cotización";
            btn.onclick = () => window.open('cotizacion.html');
            btn.classList.add('btn','btn-primary');
            div.appendChild(btn);
         
        };
      } catch (error) {
        console.error("Error extracting text:", error);
      }
    }
  }
  function genpass(){
    const password = prompt("Please enter the password to confirm the discount:");
    const presetPassword = "123456"; // Replace with your actual preset password

    if (password === presetPassword) {
        alert("Descuento Autorizado!");
        // Add your discount confirmation logic here
    } else {
        alert("Descuento no autorizado!");
    }


  }