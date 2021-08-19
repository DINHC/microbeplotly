function Charts(sample) {
      d3.json("samples.json").then((data) => {
      var sample= data.samples;
      
      var resultsarray= md.filter(sampleobject => 
      sampleobject.id == sample);
      
      var result= resultsarray[0]
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;
      });
      }

      var bar =[
      {
            y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            x:values.slice(0,10).reverse(),
            text:labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"
  
      }
      ];

      var barshape = {
            title: "Top 10 Bacteria Found in Your Belly Button",
            margin: { t: 50, l: 180 }
            };
        
      Plotly.newPlot("bar", bar, barshape);
      