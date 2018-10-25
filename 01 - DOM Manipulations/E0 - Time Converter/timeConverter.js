function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convertDistance);
    
    function convertDistance() {
      let inputDistance = Number(document.getElementById('inputDistance').value);
      let inputUnits = document.getElementById('inputUnits').value;
      let outputUnits = document.getElementById('outputUnits').value;
 
      switch (inputUnits){
        case 'km':
        inputDistance = inputDistance * 1000;
          break;
        case 'cm':
        inputDistance = inputDistance * 0.01;
          break;
        case 'mm':
        inputDistance = inputDistance * 0.001;
          break;
        case 'mi':
        inputDistance = inputDistance * 1609.34;
          break;
        case 'yrd':
        inputDistance = inputDistance * 0.9144;
          break;
        case 'ft':
        inputDistance = inputDistance * 0.3048;
          break;
        case 'in':
        inputDistance = inputDistance * 0.0254;
          break;
      }
  
      let output = 0;
      switch (outputUnits){
        case 'km':
          output = inputDistance / 1000;
          break;
        case 'm':
          output = inputDistance;
          break;
        case 'cm':
          output = inputDistance / 0.01;
          break;
        case 'mm':
          output = inputDistance / 0.001;
          break;
        case 'mi':
          output = inputDistance / 1609.34;
          break;
        case 'yrd':
          output = inputDistance / 0.9144;
          break;
        case 'ft':
          output = inputDistance / 0.3048;
          break;
        case 'in':
          output = inputDistance / 0.0254;
          break;
      }
      document.getElementById('outputDistance').value = output;
    }
  }
