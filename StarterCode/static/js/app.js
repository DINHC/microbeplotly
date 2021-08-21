function Charts(sample) {
      d3.json("samples.json").then((data) => {
      var sample= data.samples;
      var resultsarray= md.filter(sampleobject => sampleobject.id == sample);
      var result= resultsarray[0]
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;
      });
      }

      var bar =[
      {
            y: ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            x: values.slice(0,10).reverse(),
            text: labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
  
      }
      ];

      var barshape = {
            title: "Top 10 Bacteria Found in Your Belly Button",
            margin: { t: 50, l: 180 }
            };
        
      Plotly.newPlot("bar", bar, barshape);

      var bubble = [
            {
            x: ids,
            y: values,
            text: labels,
            mode: "markers",
            colorscale: 'Rainbow',
            marker: {color: ids, size: values,}
            }];

      var bubbleshape = {
            margin: {t:0},
            // padding: {auto},
            xaxis: { title: "OTU ID" },
            yaxis: {autorange: true},
            hovermode: "closest",     
      };

function buildMetadata(sample) {
      d3.json("samples.json").then((data) => {
      var meta= data.metadata;
      
      var results= meta.filter(sampleobject => sampleobject.id == sample);
      var result= resultsarray[0]
      var metasample = d3.select("#sample-metadata"); 
      metasample.html("");
      Object.entries(result).forEach(([key, value]) => {
      metasample.append("div").style('word-wrap', 'break-word').text(`${key}: ${value}`);
      });

});
}

      